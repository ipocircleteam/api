import express, { Request, Response } from "express";
import axios from "axios";
import dotenv from 'dotenv'
dotenv.config()

const accessToken = process.env.UPSTOX_ACCESS_TOKEN;
const url = process.env.UPSTOX_API_URL
const contentTypeHeader = '[CONTENT_TYPE_HEADER]';

const getMarketFeed = async (req: Request, res: Response) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://api.upstox.com/v2/feed/market-data-feed",
    headers: {
        'accept': 'application/json',
        'Api-Version': '2.0',
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': contentTypeHeader,
      },
  };

  axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export { getMarketFeed };
