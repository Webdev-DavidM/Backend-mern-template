import mongoose from 'mongoose';

const trainerSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
  },
  { useUnifiedTopology: true }
);

const Trainer = mongoose.model('Trainer', trainerSchema);

export default Trainer;
