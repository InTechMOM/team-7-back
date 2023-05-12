import express from 'express';
import createUser from '../controllers/post.js';
import getUserByEmail from '../controllers/get.js';
import getAllUser from '../controllers/get.js';
import getUserById from '../controllers/get.js';
import deleteUserById from '../controllers/delete.js';

const router = express.Router();

router.post('/users', createUser);
router.get('/users', getAllUser);
router.get('/users/:email', getUserByEmail);
router.get('/users/:id', getUserById);
router.delete('/users/:id',deleteUserById);
export default router;