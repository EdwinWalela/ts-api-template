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
const user_1 = __importDefault(require("../services/user"));
const NAMESPACE = 'User-Controller';
const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let users = [];
    try {
        users = yield user_1.default.getUsers();
    }
    catch (e) {
        res.status(500).send({
            message: e.message,
        });
    }
    res.send({
        users,
    });
});
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = Number(req.params.id);
    let user;
    try {
        user = yield user_1.default.getUser(id);
    }
    catch (error) {
        let msg = error.message;
        if (msg.includes('not found')) {
            res.status(404).send({
                msg,
            });
        }
    }
    res.send(user);
});
exports.default = { getUsers, getUser };
