import { NextFunction } from "express";

const ValidateInputs = (req: Request, res: Response, next: NextFunction) => {
  next();
};

export default ValidateInputs;
