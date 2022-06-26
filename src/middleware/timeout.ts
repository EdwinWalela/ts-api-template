import { Request, Response, NextFunction } from 'express';
import logger from '../config/logging';
const NAMESPACE = 'Timeout';

const timeout = (req: Request, res: Response, next: NextFunction) => {
	res.setTimeout(2, () => {
		logger.error(NAMESPACE, 'Request timed out');
		return res.status(500).send({
			message: 'request timed out',
		});
	});
	next();
};

export default timeout;
