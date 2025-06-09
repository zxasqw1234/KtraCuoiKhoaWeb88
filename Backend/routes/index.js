import express from 'express';
import teacherRoute from './teacherRoute.js';
import userRoute from './userRoute.js';
import teacherPositionRoute from './teacherPositionRoute.js';

const router = express.Router();

router.use('/teachers', teacherRoute);
router.use('/users', userRoute);
router.use('/teacher-positions', teacherPositionRoute);

export default router;