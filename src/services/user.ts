import repository from '../repository/users';
import User from '../models/users';

const getUsers = async (): Promise<User[]> => {
	let users = await repository.getUsers();
	users.forEach((user) => {});
	return users;
};

const getUser = async (id: Number): Promise<User> => {
	let user = await repository.getUser(id);
	if (typeof user == 'undefined') {
		throw new Error(`User with id ${id} not found`);
	}
	return user;
};

export default { getUsers, getUser };
