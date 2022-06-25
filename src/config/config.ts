import dotenv from 'dotenv';
dotenv.config();

const HTTP_PORT = Number(process.env.PORT) || 3000;
const PG_USER = process.env.PG_USER;
const PG_DB = process.env.PG_DB;
const PG_PORT = Number(process.env.PG_PORT);
const PG_PASS = process.env.PG_PASSWORD;

const config = {
	httpPort: HTTP_PORT,
	db: {
		user: PG_USER,
		pass: PG_PASS,
		port: PG_PORT,
		db: PG_DB,
	},
};

export default config;
