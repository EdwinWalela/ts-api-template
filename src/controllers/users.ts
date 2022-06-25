import userService from '../services/user';
import { Request, Response, NextFunction } from 'express';
import User from '../models/users';
import logging from '../config/logging';
const NAMESPACE = 'User-Controller';

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
	let users: User[] = [];
	try {
		users = await userService.getUsers();
	} catch (e: any) {
		res.status(500).send({
			message: e.message,
		});
	}
	res.send({
		users,
	});
};

const getUser = async (req: Request, res: Response) => {
	let id: Number = Number(req.params.id);
	let user: User | undefined;
	try {
		user = await userService.getUser(id);
	} catch (error: any) {
		let msg: string = error.message;
		if (msg.includes('not found')) {
			res.status(404).send({
				msg,
			});
		}
	}

	res.send(user);
};

export default { getUsers, getUser };
