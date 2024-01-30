"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const router_1 = __importDefault(require("./router"));
const app = (0, express_1.default)();
exports.app = app;
const corsOptions = {
    origin: [
        "*",
        "http://localhost:3000",
        "https://dashboard-ipocircle.vercel.app",
        "https://ipocircle.com",
        "https://dashboard.ipocircle.com",
        "https://www.ipocircle.com",
    ],
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
(0, router_1.default)();
