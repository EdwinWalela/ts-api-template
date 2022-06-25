class User {
	fname: string;
	lname: string;
	dob: Date;

	constructor(fname: string, lname: string, dob: Date) {
		this.fname = fname;
		this.lname = lname;
		this.dob = dob;
	}
}

export default User;
