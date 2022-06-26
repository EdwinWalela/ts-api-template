import express from 'express';
import controller from '../controllers/users';
import verifyToken from '../middleware/tokenVerification';

const router = express.Router();
``;
router.get('/', verifyToken, controller.getUsers);
router.get('/:id', verifyToken, controller.getUser);

export default router;
