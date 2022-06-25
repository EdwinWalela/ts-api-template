"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const HTTP_PORT = Number(process.env.PORT) || 3000;
const PG_USER = process.env.PG_USER;
const PG_DB = process.env.PG_DB;
const PG_PORT = Number(process.env.PG_PORT);
const PG_PASS = process.env.PG_PASSWORD;
const config = {
    httpPort: HTTP_PORT,
    db: {
        user: PG_USER,
        pass: PG_PASS,
        port: PG_PORT,
        db: PG_DB,
    },
};
exports.default = config;
