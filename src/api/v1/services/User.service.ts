import userRepositories from '../repositories/User.repository';

const getUsers = (data: string) => {
	userRepositories.getUsers('calling repository from service');
};

export default {
	getUsers,
};
