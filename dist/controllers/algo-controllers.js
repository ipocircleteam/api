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
Object.defineProperty(exports, "__esModule", { value: true });
exports.runAlgo = void 0;
const runAlgo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // add algo here
        const { amount, no_of_demat_acc, risk_profile } = req.body;
        console.log(req.body);
        res.status(200).send({
            success: true,
            data: [],
            msg: "Fetched data successfully",
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            data: [],
            msg: "Internal Server Error",
        });
    }
});
exports.runAlgo = runAlgo;
