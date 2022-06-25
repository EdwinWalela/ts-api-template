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
const db_1 = __importDefault(require("../config/db"));
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    var users = [];
    let result;
    try {
        result = yield db_1.default.query('SELECT id,first_name,last_name,email FROM users');
    }
    catch (error) {
        throw new Error(`Failed to query users: ${error}`);
    }
    result.rows.forEach((user) => {
        users.push(user);
    });
    return users;
});
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    var result;
    try {
        result = yield db_1.default.query('SELECT id,first_name,last_name,email FROM users WHERE id=$1', [id]);
    }
    catch (error) {
        throw new Error(`Failed to query user: ${error}`);
    }
    return result.rows[0];
});
exports.default = { getUsers, getUser };
