import { startupRouter } from './models/startup/routes';
import express from 'express';

const router = express.Router();

router.use('/startup', startupRouter);

export default router;