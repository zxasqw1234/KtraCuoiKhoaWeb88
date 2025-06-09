import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
  degree: String,
  university: String
}, { _id: false });

const teacherSchema = new mongoose.Schema({
  code: { type: String, unique: true },
  name: String,
  email: { type: String, unique: true },
  phone: String,
  status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
  address: String,
  position: String,
  education: educationSchema
}, { timestamps: true });

const Teacher = mongoose.model('Teacher', teacherSchema);
export default Teacher;
