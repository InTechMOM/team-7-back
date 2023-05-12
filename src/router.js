import express from "express";
import usersRouter from "./api/users/routes/index.js";

//router
const router = express.Router();

router.use('/api',usersRouter);

export default router;