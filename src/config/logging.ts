const getTimestamp: Function = (): String => {
	return new Date().toISOString();
};

const info = (namespace: String, message: String, object?: any) => {
	if (object) {
		console.info(`[${getTimestamp()}] [INFO] [${namespace}] ${message} `, object);
	} else {
		console.info(`[${getTimestamp()}] [INFO] [${namespace}] ${message}`);
	}
};

const debug: Function = (namespace: String, message: String, object?: any) => {
	if (object) {
		console.debug(`[${getTimestamp()}] [DEBUG] [${namespace}] ${message} `, object);
	} else {
		console.debug(`[${getTimestamp()}] [DEBUG] [${namespace}] ${message}`);
	}
};

const warn: Function = (namespace: String, message: String, object?: any) => {
	if (object) {
		console.warn(`[${getTimestamp()}] [WARN] [${namespace}] ${message} `, object);
	} else {
		console.warn(`[${getTimestamp()}] [WARN] [${namespace}] ${message}`);
	}
};

const error: Function = (namespace: String, message: String, object?: any) => {
	if (object) {
		console.error(`[${getTimestamp()}] [ERROR] [${namespace}] ${message} `, object);
	} else {
		console.error(`[${getTimestamp()}] [ERROR] [${namespace}] ${message}`);
	}
};

export default { info, warn, debug, error };
