"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMarketFeed = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const accessToken = process.env.UPSTOX_ACCESS_TOKEN;
const url = process.env.UPSTOX_API_URL;
const contentTypeHeader = '[CONTENT_TYPE_HEADER]';
const getMarketFeed = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
    (0, axios_1.default)(config)
        .then((response) => {
        console.log(JSON.stringify(response.data));
    })
        .catch((error) => {
        console.log(error);
    });
});
exports.getMarketFeed = getMarketFeed;
