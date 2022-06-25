import { getUsers } from '../repository/users';
import User from '../models/users';

const getUsersService = async (): Promise<User[]> => {
	let users = await getUsers();
	users.forEach((user) => {});
	return users;
};

export { getUsersService };
