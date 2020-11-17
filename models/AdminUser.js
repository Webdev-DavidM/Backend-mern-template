import mongoose from 'mongoose';

const adminUsersSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
  },
  { useUnifiedTopology: true }
);

const Admin = mongoose.model('Admin', adminUsersSchema);

export default Admin;
