import mongoose from 'mongoose';

const teacherPositionSchema = new mongoose.Schema({
  code: String,
  des: String,
  isActive: Boolean,
  isDeleted: Boolean,
  name: String
}, { timestamps: true });

const TeacherPosition = mongoose.model('TeacherPosition', teacherPositionSchema);
export default TeacherPosition;




