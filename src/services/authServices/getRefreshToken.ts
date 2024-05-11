import jwt from "jsonwebtoken";

const generateRefreshToken = (admin: any) => {
  if (!process.env.REFRESH_TOKEN_SECRET) {
    throw new Error("REFRESH_TOKEN_SECRET is not defined");
  }
  return jwt.sign(
    { id: admin.id, username: admin.username },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "1h" }
  );
};

export default generateRefreshToken;
