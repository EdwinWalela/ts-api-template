import dotenv from 'dotenv';
dotenv.config();

const HTTP_PORT = Number(process.env.PORT) || 3000;

const config = {
	httpPort: HTTP_PORT,
};

export default config;
