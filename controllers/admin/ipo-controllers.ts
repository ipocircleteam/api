import { Request, Response } from "express";
import { myDataSource } from "../../database/db";
import initDb from "../../database/initDb";
import ipoEntity from "../../models/ipo.entity";
import reviewEntity from "../../models/review.entity";
import company_financeEntity from "../../models/company_finance.entity";
import { IPO } from "../../utils/types/ipo";

// GET REQUEST
const getCompleteIpoDetails = async (req: Request, res: Response) => {
  try {
    await initDb();
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
    await initDb();
    const reqData = req.body;
    if (!reqData.ipodetails || !reqData.companyFinance) {
      res.status(401).json({
        success: false,
        msg: "Invalid inputs passed!",
      });
      return;
    }

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
    
      const newReview = await myDataSource
      .getRepository(reviewEntity)
        .create({
          ipo_id: reqData.ipodetails.id,
          review: ""
      });
    const savedNewReview = await myDataSource
      .getRepository(reviewEntity)
      .save(newReview);


    if (!savedNewCompany || !savedNewIpo || !savedNewReview) {
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
    await initDb();
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
    await initDb();
    const {id} = req.query;
    if (!id) {
      res.status(401).json({
        success: false,
        msg: "Invalid inputs passed!",
      });
      return;
    }

    const deleteIpo = await myDataSource
      .getRepository(ipoEntity)
      .delete({id: id})

    if (!deleteIpo) {
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
}

export { getCompleteIpoDetails, addCompleteIpoDetails, updateCompleteIpoDetails, deleteIpoById };
