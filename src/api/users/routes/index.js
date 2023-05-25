import express from 'express';
import createUser from '../controllers/post.js';
import {getAllUser, getUserByEmail} from '../controllers/get.js';
import deleteUserById from '../controllers/delete.js';
import putUser from '../controllers/put.js';

const router = express.Router();

router.post('/users', createUser);
router.get('/users', getAllUser);
router.get('/users/:email', getUserByEmail);
router.delete('/users/:id',deleteUserById);
router.put('/users/:id',putUser);

export default router;