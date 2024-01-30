import { Request, Response } from "express";
import { myDataSource } from "../../db";
import connectDb from "../../db";
import ipoEntity from "../../models/ipo.entity";
import reviewEntity from "../../models/review.entity";
import company_financeEntity from "../../models/company_finance.entity";
import { IPO } from "../../types/ipo.types";
import gmpEntity from "../../models/gmp.entity";
import lotsEntity from "../../models/lots.entity";
import trackerEntity from "../../models/tracker.entity";

// GET REQUEST
const getCompleteIpoDetails = async (req: Request, res: Response) => {
  try {
    await connectDb();
    const { ipoId } = req.query;

    const ipoResData = await myDataSource.getRepository(ipoEntity).find({
      where: {
        id: ipoId,
      },
    });

    const reviewResData = await myDataSource.getRepository(reviewEntity).find({
      where: {
        ipo_id: ipoId,
      },
    });

    const companyResData = await myDataSource
      .getRepository(company_financeEntity)
      .find({
        where: {
          ipo_id: ipoId,
        },
      });

    if (
      ipoResData.length === 0 ||
      reviewResData.length === 0 ||
      companyResData.length === 0
    ) {
      res.status(400).json({
        success: false,
        msg: "associated data not found",
      });
      return;
    }

    const data = {
      ipodetails: ipoResData,
      companyFinance: companyResData,
      reviews: reviewResData,
    };

    res.status(200).json({
      success: true,
      msg: "Data fetched successfully",
      data: data,
    });
  } catch (error) {
    console.log(`Error in Admin Ipo GET request, ${error}`);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};

// POST REQUEST
const addCompleteIpoDetails = async (req: Request, res: Response) => {
  try {
    await connectDb();
    const reqData = req.body;
    if (!reqData.ipodetails || !reqData.companyFinance) {
      res.status(401).json({
        success: false,
        msg: "Invalid inputs passed!",
      });
      return;
    }

    const year = new Date(reqData.ipodetails.closing_date).getFullYear()

    const newIpoDetails = await myDataSource
      .getRepository(ipoEntity)
      .create(reqData.ipodetails);
    const savedNewIpo = await myDataSource
      .getRepository(ipoEntity)
      .save(newIpoDetails);
    

    const newCompanyFinance = await myDataSource
      .getRepository(company_financeEntity)
      .create(reqData.companyFinance);
    const savedNewCompany = await myDataSource
      .getRepository(company_financeEntity)
      .save(newCompanyFinance);

    const newReview = await myDataSource.getRepository(reviewEntity).create({
      ipo_id: reqData.ipodetails.id,
      review: "",
    });
    const savedNewReview = await myDataSource
      .getRepository(reviewEntity)
      .save(newReview);
    
    
    const newTracker = await myDataSource.getRepository(trackerEntity).create({
      id: reqData.ipodetails.id,
      issue_price: 0,
      current_price: 0,
      dayend_price: 0,
      listing_price: 0,
      year: year,
      sector: '',
      company_name: reqData.ipodetails.name
    })
    const saveNewTracker = await myDataSource.getRepository(trackerEntity).save(newTracker)
    

    if (!savedNewCompany || !savedNewIpo || !savedNewReview || !saveNewTracker) {
      res.status(400).json({
        success: false,
        msg: "Error creating data",
      });
      return;
    }

    res.status(200).json({
      success: true,
      msg: "New Ipo Added",
    });
  } catch (error: any) {
    console.log(`Error in Admin Ipo POST request, ${error}`);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};

// PATCH REQUEST
const updateCompleteIpoDetails = async (req: Request, res: Response) => {
  try {
    await connectDb();
    const reqData = req.body;
    if (!reqData.ipodetails || !reqData.companyFinance) {
      res.status(401).json({
        success: false,
        msg: "Invalid inputs passed!",
      });
      return;
    }

    const savedNewIpo = await myDataSource
      .getRepository(ipoEntity)
      .save(reqData.ipodetails);

    const savedNewCompany = await myDataSource
      .getRepository(company_financeEntity)
      .save(reqData.companyFinance);

    if (!savedNewCompany || !savedNewIpo) {
      res.status(400).json({
        success: false,
        msg: "Error updating data",
      });
      return;
    }

    res.status(200).json({
      success: true,
      msg: "Updated Ipo",
    });
  } catch (error) {
    console.log(`Error in Admin Ipo PATCH request, ${error}`);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};

// DELETE REQUEST
const deleteIpoById = async (req: Request, res: Response) => {
  try {
    await connectDb();
    const { id } = req.query;
    if (!id) {
      res.status(401).json({
        success: false,
        msg: "Invalid inputs passed!",
      });
      return;
    }

    const deleteIpo = await myDataSource
      .getRepository(ipoEntity)
      .delete({ id: id });

    const deleteIpoFromGmp = await myDataSource
      .getRepository(gmpEntity)
      .delete({ ipo_id: id });
    const deleteFromCompany = await myDataSource
      .getRepository(company_financeEntity)
      .delete({ ipo_id: id });
    const deleteFromLots = await myDataSource
      .getRepository(lotsEntity)
      .delete({ ipo_id: id });
    const deleteReview = await myDataSource
      .getRepository(reviewEntity)
      .delete({ ipo_id: id });
    const deleteTracker = await myDataSource
      .getRepository(trackerEntity)
      .delete({ id: id });

    if (
      !deleteIpo ||
      !deleteFromCompany ||
      !deleteFromLots ||
      !deleteReview ||
      !deleteTracker ||
      !deleteIpoFromGmp
    ) {
      res.status(400).json({
        success: false,
        msg: "Error deleting data",
      });
      return;
    }

    res.status(200).json({
      success: true,
      msg: "Deleted Ipo",
    });
  } catch (error) {
    console.log(`Error in Admin Ipo DELETE request, ${error}`);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};

export {
  getCompleteIpoDetails,
  addCompleteIpoDetails,
  updateCompleteIpoDetails,
  deleteIpoById,
};
