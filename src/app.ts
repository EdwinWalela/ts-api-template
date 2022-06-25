import express from 'express';
import logging from './config/logging';
import config from './config/config';
import db from './config/db';
import userRoutes from './routes/users';
import logRequest from './middleware/logging';
import notFound from './middleware/notfound';

const NAMESPACE = 'Server';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logRequest);
app.use('/users', userRoutes);
app.use(notFound);

(async () => {
	try {
		await db.connect();
		logging.info(NAMESPACE, `DB connection established`);
	} catch (error) {
		logging.error(NAMESPACE, 'Failed to connect to db', error);
	}
})();

app.listen(config.httpPort, () => {
	logging.info(NAMESPACE, `Listening for requests on port ${config.httpPort}`);
});
