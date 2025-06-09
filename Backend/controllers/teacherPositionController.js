import TeacherPosition from '../models/TeacherPosition.js';
// Lấy tất cả vị trí
export const getAllTeacherPositions = async (req, res) => {
  try {
    const positions = await TeacherPosition.find();
    res.status(200).json(positions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lấy vị trí theo id
export const getTeacherPositionById = async (req, res) => {
  try {
    const position = await TeacherPosition.findById(req.params.id);
    if (!position) return res.status(404).json({ message: 'Not Found' });
    res.status(200).json(position);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Tạo vị trí mới
export const createTeacherPosition = async (req, res) => {
  try {
    const newPosition = new TeacherPosition(req.body);
    const savedPosition = await newPosition.save();
    res.status(201).json(savedPosition);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Cập nhật vị trí
export const updateTeacherPosition = async (req, res) => {
  try {
    const updatedPosition = await TeacherPosition.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPosition) return res.status(404).json({ message: 'Not Found' });
    res.status(200).json(updatedPosition);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Xóa vị trí
export const deleteTeacherPosition = async (req, res) => {
  try {
    const deletedPosition = await TeacherPosition.findByIdAndDelete(req.params.id);
    if (!deletedPosition) return res.status(404).json({ message: 'Not Found' });
    res.status(200).json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
