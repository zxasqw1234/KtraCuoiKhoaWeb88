import express from 'express';
import {
  getAllTeacherPositions,
  getTeacherPositionById,
  createTeacherPosition,
  updateTeacherPosition,
  deleteTeacherPosition
} from '../controllers/teacherPositionController.js';

const router = express.Router();

router.get('/', getAllTeacherPositions);
router.get('/:id', getTeacherPositionById);
router.post('/', createTeacherPosition);
router.put('/:id', updateTeacherPosition);
router.delete('/:id', deleteTeacherPosition);

export default router;
