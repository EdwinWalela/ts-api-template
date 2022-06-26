import express from 'express';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import logger from '../config/logging';
const NAMESPACE = 'Token Verification';

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
	const bearerToken = req.headers.authorization;

	if (typeof bearerToken !== 'undefined') {
		if (bearerToken.split(' ').length != 2) {
			return res.status(401).send({
				message: 'Malformed Access Token',
			});
		}
		let token: string = bearerToken.split(' ')[1];
		logger.debug(NAMESPACE, token);
		next();
	} else {
		return res.status(401).send({
			message: 'Access Token missing',
		});
	}
};

export default verifyToken;
