import mongoose from "mongoose";

//please just the name of the model titles as required

const bikeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a value for 'title'"],
  },
  price: {
    type: Number,
    required: [true, "Please provide a value for 'price'"],
  },
});

const Bike = mongoose.model("Bike", bikeSchema);

export default Bike;
