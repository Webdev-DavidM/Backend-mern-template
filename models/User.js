import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
    name: String,
  },
  { useUnifiedTopology: true }
);

const User = mongoose.model('User', usersSchema);

export default User;
