import express from 'express';
import createUser from '../controllers/post.js';
import getUser from '../controllers/get.js';

const router = express.Router();

router.post('/users', createUser);

router.get('/:id',getUser);

export default router;