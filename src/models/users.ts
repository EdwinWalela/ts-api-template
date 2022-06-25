class User {
	id: Number;
	fname: string;
	lname: string;
	email: string;

	constructor(id: Number, fname: string, lname: string, email: string) {
		this.id = id;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
	}
}

export default User;
