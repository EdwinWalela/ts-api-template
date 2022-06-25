import { Request, Response, NextFunction, Express } from 'express';
import express from 'express';
import logging from './config/logging';
import config from './config/config';
import db from './config/db';

const NAMESPACE = 'Server';
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/** Logging */
app.use((req: Request, res: Response, next: NextFunction) => {
	res.on('finish', () => {
		logging.info(
			NAMESPACE,
			`[${req.method}] ${req.url} [${req.socket.remoteAddress}] [${res.statusCode}]`
		);
	});

	next();
});

/** Error Handling - 404 */
app.use((req: Request, res: Response, next: NextFunction) => {
	const error = new Error('Requested resource not found');
	return res.status(404).send({
		msg: error.message,
	});
});

(async () => {
	try {
		await db.connect();
		logging.info(NAMESPACE, `DB connection established`);
	} catch (error) {
		logging.error(NAMESPACE, 'Failed to connect to db', error);
	}
})();

app.listen(config.httpPort, () => {
	logging.info(NAMESPACE, `Listening for requests on port ${config.httpPort}`);
});
