import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { asyncHandler, ApiError, ApiResponse } from "../../utils";

const prisma = new PrismaClient();

const generateAccessToken = (admin: any) => {
  if (!process.env.ACCESS_TOKEN_SECRET) {
    throw new Error('ACCESS_TOKEN_SECRET is not defined');
  }
  return jwt.sign({ id: admin.id, username: admin.username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
};

const generateRefreshToken = (admin: any) => {
  if (!process.env.REFRESH_TOKEN_SECRET) {
    throw new Error('REFRESH_TOKEN_SECRET is not defined');
  }
  return jwt.sign({ id: admin.id, username: admin.username }, process.env.REFRESH_TOKEN_SECRET, {expiresIn : '1h'});
};



const addAdmin = asyncHandler(async (req: Request, res: Response) => {
  const { username, email, fullName, password } = req.body;

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
      },
    });

    const responseAdmin = { 
      id: newAdmin.id, 
      username: newAdmin.username, 
      email: newAdmin.email, 
      fullName: newAdmin.fullName 
    };

    res.status(201).json(new ApiResponse(201, { admin: responseAdmin }, 'Admin user registered successfully'));
  } catch (error : any) {
    console.error('Error registering admin user:', error);
    res.status(error.statusCode || 500).json(new ApiResponse(error.statusCode || 500, null, error.message));
  }
});


const loginAdmin = asyncHandler(async(req : Request,res : Response) => {
  const {usernameOremail , password} = req.body;

  if (!usernameOremail) {
    throw new ApiError(400, "username or email is required")
  }

  const user = await prisma.admin.findFirst({
    where : {
      OR:[
        {username :usernameOremail},
        {email : usernameOremail}
      ]
    }
  });

  if(!user){
    throw new ApiError(404, 'User not found');
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
    select: { id: true, username: true, email: true, fullName: true },
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

export {
  addAdmin,
  loginAdmin,
  logoutAdmin,
};
