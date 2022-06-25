import { getUsersService, getUserService } from '../services/user';
import { Request, Response, NextFunction } from 'express';
import User from '../models/users';

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
	let users: User[] = [];
	try {
		users = await getUsersService();
	} catch (e: any) {
		res.status(500).send({
			message: e.message,
		});
	}
	res.send({
		users,
	});
};

const getUser = async (req: Request, res: Response, next: NextFunction) => {
	let user = await getUserService(req.body.id);
};

export default { getUsers, getUser };
