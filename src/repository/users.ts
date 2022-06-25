import db from '../config/db';
import User from '../models/users';
import { QueryResult } from 'pg';

const getUsers = async (): Promise<User[]> => {
	var users: User[] = [];
	let result: QueryResult<User>;
	try {
		result = await db.query('SELECT id,first_name,last_name,email FROM users');
	} catch (error) {
		throw new Error(`Failed to query users: ${error}`);
	}

	result.rows.forEach((user) => {
		users.push(user);
	});

	return users;
};

const getUser = async (id: Number): Promise<User> => {
	var result: QueryResult<User>;
	try {
		result = await db.query('SELECT id,first_name,last_name,email FROM users WHERE id=$1', [id]);
	} catch (error) {
		throw new Error(`Failed to query user: ${error}`);
	}

	return result.rows[0];
};

export default { getUsers, getUser };
