import { Request, Response } from "express";

const runAlgo = async (req: Request, res: Response) => {
  try {
    // add algo here
    const { amount, no_of_demat_acc, risk_profile } = req.body;
    console.log(req.body);

    res.status(200).json({
      success: true,
      data: [],
      msg: "Fetched data successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: [],
      msg: "Internal Server Error",
    });
  }
};

export { runAlgo };
