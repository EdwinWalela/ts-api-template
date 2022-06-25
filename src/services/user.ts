import { getUsers } from '../repository/users';
import User from '../models/users';

const getUsersService = async (): Promise<User[]> => {
	let users = await getUsers();
	users.forEach((user) => {});
	return users;
};

const getUserService = async (id: Number): Promise<User> => {
	let users = await getUsers();
	users.forEach((user) => {});
	return users[0];
};

export { getUsersService, getUserService };
