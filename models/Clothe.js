import mongoose from 'mongoose';

const clothesSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
  },
  { useUnifiedTopology: true }
);

const Clothe = mongoose.model('Clothe', clothesSchema);

export default Clothe;
