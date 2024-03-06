import jwt from "jsonwebtoken";


const generateAccessToken = (admin: any) => {
    if (!process.env.ACCESS_TOKEN_SECRET) {
      throw new Error('ACCESS_TOKEN_SECRET is not defined');
    }
    return jwt.sign({ id: admin.id, username: admin.username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
  };
  
export{
    generateAccessToken,
};
