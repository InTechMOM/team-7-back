import express from "express";
import usersRouter from "./api/users/routes/index.js";

//enrutador
const router = express.Router();

//load routes Todas
router.use('/api',usersRouter);

export default router;