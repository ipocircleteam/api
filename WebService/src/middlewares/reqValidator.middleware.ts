import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const validateRequest = async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        res.status(400).send(`"Invalid inputs passed, please fill again", ${errors}`)
        return
    }
    next()
}

export default validateRequest