import express, { Request, Response } from "express";
import { myDataSource } from "../../db";
import connectDb from "../../db";
import user_email, { NewUserMail } from "../../models/users/user_email";

const saveUserMail = async (req: Request, res: Response) => {
  try {
    await connectDb();
    const data = req.body;

    const newMail = new NewUserMail();
    newMail.mail = data.mail;

    const createNewMail = await myDataSource
      .getRepository(user_email)
      .create(newMail);
    const saveNewMail = await myDataSource
      .getRepository(user_email)
      .save(createNewMail);

    if (!saveNewMail.mail) {
      res.status(400).json({ success: false, msg: "Mail not added" });
    }

    res.status(200).json({
      success: true,
      msg: "Mail added",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, msg: "Mail not added" });
  }
};

export { saveUserMail };
