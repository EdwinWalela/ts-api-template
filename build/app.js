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
const express_1 = __importDefault(require("express"));
const logging_1 = __importDefault(require("./config/logging"));
const config_1 = __importDefault(require("./config/config"));
const db_1 = __importDefault(require("./config/db"));
const users_1 = __importDefault(require("./routes/users"));
const NAMESPACE = 'Server';
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
/** Logging */
app.use((req, res, next) => {
    res.on('finish', () => {
        logging_1.default.info(NAMESPACE, `[${req.method}] ${req.url} [${req.socket.remoteAddress}] [${res.statusCode}]`);
    });
    next();
});
app.use('/users', users_1.default);
/** Error Handling - 404 */
app.use((req, res, next) => {
    const error = new Error('Requested resource not found');
    return res.status(404).send({
        msg: error.message,
    });
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.default.connect();
        logging_1.default.info(NAMESPACE, `DB connection established`);
    }
    catch (error) {
        logging_1.default.error(NAMESPACE, 'Failed to connect to db', error);
    }
}))();
app.listen(config_1.default.httpPort, () => {
    logging_1.default.info(NAMESPACE, `Listening for requests on port ${config_1.default.httpPort}`);
});
