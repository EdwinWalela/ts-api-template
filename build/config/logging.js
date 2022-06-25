"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTimestamp = () => {
    return new Date().toISOString();
};
const info = (namespace, message, object) => {
    if (object) {
        console.info(`[${getTimestamp()}] [INFO] [${namespace}] ${message} `, object);
    }
    else {
        console.info(`[${getTimestamp()}] [INFO] [${namespace}] ${message}`);
    }
};
const debug = (namespace, message, object) => {
    if (object) {
        console.debug(`[${getTimestamp()}] [DEBUG] [${namespace}] ${message} `, object);
    }
    else {
        console.debug(`[${getTimestamp()}] [DEBUG] [${namespace}] ${message}`);
    }
};
const warn = (namespace, message, object) => {
    if (object) {
        console.warn(`[${getTimestamp()}] [WARN] [${namespace}] ${message} `, object);
    }
    else {
        console.warn(`[${getTimestamp()}] [WARN] [${namespace}] ${message}`);
    }
};
const error = (namespace, message, object) => {
    if (object) {
        console.error(`[${getTimestamp()}] [ERROR] [${namespace}] ${message} `, object);
    }
    else {
        console.error(`[${getTimestamp()}] [ERROR] [${namespace}] ${message}`);
    }
};
exports.default = { info, warn, debug, error };
