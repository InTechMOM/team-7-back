import express from 'express';
import createQualification from '../controllers/post.js';
import {getQualificationByEmail,getAllQualifications} from '../controllers/get.js';

const router = express.Router();

router.post('/qualifications', createQualification);
router.get('/qualifications/:emailTeacher', getQualificationByEmail);
router.get('/qualifications', getAllQualifications);

export default router;