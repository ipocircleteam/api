import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';
import { asyncHandler, ApiError, ApiResponse } from "../../utils";
import { generateRefreshToken } from '../../utils/getRefreshToken';
import { generateAccessToken } from '../../utils/getAccessToken';

const prisma = new PrismaClient();

const addAdmin = asyncHandler(async (req: Request, res: Response) => {
  const { username, email, fullName, password, role } = req.body;

  try {
    const existingAdmin = await prisma.admin.findFirst({
      where: {
        OR: [
          { username },
          { email },
        ],
      },
    });

    if (existingAdmin) {
      throw new ApiError(400, 'Username or email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = await prisma.admin.create({
      data: {
        username,
        email,
        fullName,
        password: hashedPassword,
        role,
      },
    });

    const responseAdmin = { 
      id: newAdmin.id, 
      username: newAdmin.username, 
      email: newAdmin.email, 
      fullName: newAdmin.fullName,
      role : newAdmin.role,
    };

    res.status(201).json(new ApiResponse(201, { admin: responseAdmin }, 'Admin user registered successfully'));
  } catch (error : any) {
    console.error('Error registering admin user:', error);
    res.status(error.statusCode || 500).json(new ApiResponse(error.statusCode || 500, null, error.message));
  }
});


const loginAdmin = asyncHandler(async(req : Request,res : Response) => {
  const {username , password} = req.body;

  if (!username) {
    throw new ApiError(400, "username or email is required")
  }

  const user = await prisma.admin.findFirst({
    where : {
      OR:[
        {username :username},
      ]
    }
  });

  if(!user){
    throw new ApiError(404, 'User not found');
  }

  if(user?.role !== 'admin'){
    throw new ApiError(401,"admin not found");
  }
 

  const ispasswordValid = await bcrypt.compare(password,user.password);
  if(!ispasswordValid){
    throw new ApiError(401, 'Incorrect password');
  }

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  await prisma.admin.update({
    where: { id: user.id },
    data: { refreshToken },
  });

  const loggedInUser = await prisma.admin.findUnique({
    where: { id: user.id },
    select: { id: true, username: true, email: true, fullName: true, role: true },
  });

  const options = {
    httpOnly: true,
    secure: true
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200, 
            {
                user: loggedInUser, accessToken, refreshToken
            },
            "User logged In Successfully"
        )
    );
});


interface CustomRequest extends Request {
  userId?: number; 
}


const logoutAdmin = asyncHandler(async (req: CustomRequest, res: Response) => {
  const userId = req.userId;

  const updatedAdmin = await prisma.admin.update({
    where: { id: userId },
    data: { refreshToken: null },
  });

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "Admin logged out successfully"));
});

const refreshAccessToken = asyncHandler(async (req: Request, res: Response) => {
  const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
      throw new ApiError(401, "Unauthorized request");
  }

  const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;

  if (!refreshTokenSecret) {
      throw new ApiError(500, "Refresh token secret is not defined");
  }

  try {
      const decodedToken: any = jwt.verify(
          incomingRefreshToken,
          refreshTokenSecret
      );
      console.log('Decoded Refresh Token:', decodedToken); // Log decoded token for inspection

      const user = await prisma.admin.findUnique({
          where: { id: decodedToken.userId }
      });

      if (!user || incomingRefreshToken !== user.refreshToken) {
          throw new ApiError(401, "Invalid refresh token");
      }

      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);

      await prisma.admin.update({
          where: { id: user.id },
          data: { refreshToken },
      });

      const options = {
          httpOnly: true,
          secure: true
      };

      return res
          .status(200)
          .cookie("accessToken", accessToken, options)
          .cookie("refreshToken", refreshToken, options)
          .json(
              new ApiResponse(
                  200, 
                  { accessToken, refreshToken },
                  "Access token refreshed"
              )
          );
  } catch (error: any) {
      const errorMessage = (error as Error).message || "Invalid refresh token";
      throw new ApiError(401, errorMessage);
  }

});

export {
  addAdmin,
  loginAdmin,
  logoutAdmin,
  refreshAccessToken,
};
