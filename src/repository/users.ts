import db from '../config/db';
import User from '../models/users';
import { QueryResult } from 'pg';

const getUsers = async (): Promise<User[]> => {
	var users: User[] = [];
	let result: QueryResult<User>;
	try {
		result = await db.query('SELECT * FROM users');
	} catch (error) {
		throw new Error(`Failed to query users: ${error}`);
	}

	result.rows.forEach((user) => {
		users.push(user);
	});

	return users;
};

export { getUsers };
