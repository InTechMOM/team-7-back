import express from 'express';
import createVideo from '../controllers/post.js';
import getVideosByEmail from '../controllers/get.js';
import getAllVideos from '../controllers/get.js';
import getVideoById from '../controllers/get.js';
import deleteVideoById from '../controllers/delete.js';
import putVideo from '../controllers/put.js';

const router = express.Router();

router.post('/videos', createVideo);
router.get('/videos', getAllVideos);
router.get('/videos/:email', getVideosByEmail);
router.get('/videos/:id', getVideoById);
router.delete('/videos/:id',deleteVideoById);
router.put('/videos/:id',putVideo);

export default router;
