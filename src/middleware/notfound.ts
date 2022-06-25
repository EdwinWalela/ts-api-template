import { Request, Response, NextFunction } from 'express';

const notFound = (req: Request, res: Response, next: NextFunction) => {
	const error = new Error('Requested resource not found');
	return res.status(404).send({
		msg: error.message,
	});
};

export default notFound;
