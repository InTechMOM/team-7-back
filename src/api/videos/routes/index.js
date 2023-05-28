import express from 'express';
import createVideo from '../controllers/post.js';
import {getAllVideo, getVideoByEmailTeacher} from '../controllers/get.js';

const router = express.Router();

router.post('/videos', createVideo);
router.get('/videos', getAllVideo);
router.get('/videos/:emailTeacher', getVideoByEmailTeacher);

export default router;
