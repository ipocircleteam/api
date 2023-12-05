"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = require("./database/db");
const ipodata_1 = require("./routes/ipodata");
const trackerdata_1 = require("./routes/trackerdata");
const algo_1 = require("./routes/algo");
dotenv_1.default.config();
console.log(`Node Environment is ${process.env.NODE_ENV}`);
const app = (0, express_1.default)();
const corsOptions = {
    origin: "*",
    methods: "PUT, GET, DELETE, PATCH, OPTIONS, POST",
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    credentials: true,
    maxAge: 800,
};
app.use(express_1.default.json({ limit: "10mb" }));
app.use(express_1.default.urlencoded({ limit: "10mb", extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)(corsOptions));
app.get("/", (req, res) => {
    res.status(200).send("Welcome to IPO Circle APIs Phase 1");
});
app.use("/api/v1/ipo/", ipodata_1.ipoDataRouter);
app.use("/api/v1/tracker/", trackerdata_1.trackerRouter);
app.use("/api/v1/expertAlgo/", algo_1.algoRouter);
app.listen(process.env.PORT || 6969, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT || 6969}`);
});
db_1.myDataSource
    .initialize()
    .then(() => {
    console.log("DB Connected via Typeorm");
})
    .catch((err) => {
    console.log(`Error during data source initialization: ${err}`);
    throw err;
});
