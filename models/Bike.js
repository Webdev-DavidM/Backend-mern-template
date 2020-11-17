import mongoose from 'mongoose';

const bikeSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    image: String,
  },
  { useUnifiedTopology: true }
);

const Bike = mongoose.model('Bike', bikeSchema);

export default Bike;
