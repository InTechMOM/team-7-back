import express from "express";
import usersRouter from "./api/users/routes/index.js";
import videosRouter from "./api/videos/routes/index.js";

//router
const router = express.Router();

router.use('/api',usersRouter);
router.use('/api',videosRouter);

export default router;