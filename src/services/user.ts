import repository from '../repository/users';
import User from '../models/users';

const getUsers = async (): Promise<User[]> => {
	let users = await repository.getUsers();
	users.forEach((user) => {});
	return users;
};

const getUser = async (id: Number): Promise<User> => {
	let users = await repository.getUsers();
	users.forEach((user) => {});
	return users[0];
};

export default { getUsers, getUser };
