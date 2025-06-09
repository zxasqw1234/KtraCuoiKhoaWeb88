import Teacher from '../models/Teacher.js';

// Tạo mã số giáo viên random không trùng
const generateUniqueCode = async () => {
  let code;
  let exists = true;
  while (exists) {
    code = Math.floor(1000000000 + Math.random() * 9000000000).toString(); // 10 số
    const teacher = await Teacher.findOne({ code });
    if (!teacher) exists = false;
  }
  return code;
};

export const getTeachers = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const teachers = await Teacher.find()
      .skip((page - 1) * limit)
      .limit(Number(limit));
    const total = await Teacher.countDocuments();
    res.json({ total, teachers });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createTeacher = async (req, res) => {
  try {
    const { email } = req.body;
    const emailExists = await Teacher.findOne({ email });
    if (emailExists) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const code = await generateUniqueCode();
    const newTeacher = new Teacher({ ...req.body, code });
    await newTeacher.save();
    res.status(201).json(newTeacher);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const teacher = await Teacher.findByIdAndDelete(id);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    res.json({ message: 'Teacher deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export const updateTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTeacher = await Teacher.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedTeacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    } 
    res.json(updatedTeacher);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getTeacherById = async (req, res) => {
  try {
    const { id } = req.params;
    const teacher = await Teacher.findById(id);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    res.json(teacher);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}