import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  email: String,
  address: String,
  dob: Date,
  name: String,
  phoneNumber: String,
  role: String,   // ADMIN, STUDENT, TEACHER...
  isDeleted: Boolean,
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account'   // nếu bạn có collection Account
  }
}, { timestamps: true });

export default mongoose.model('User', userSchema);