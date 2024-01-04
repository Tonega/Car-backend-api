import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
  licensePlate: { type: String, required: true, unique: true },
  ownerName: { type: String, required: true },
  contactNumber: { type: String, required: true },
  emailAddress: { type: String, required: true },
});

const Car = mongoose.model('Car', carSchema);

export default Car;