import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';

const logRequest = (req: Request, res: Response, next: NextFunction) => {
	res.on('finish', () => {
		logging.info(
			'Server',
			`[${req.method}] ${req.url} [${req.socket.remoteAddress}] [${res.statusCode}]`
		);
	});

	next();
};

export default logRequest;
