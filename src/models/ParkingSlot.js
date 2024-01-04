import mongoose from 'mongoose';

const parkingSlotSchema = new mongoose.Schema({
    slotNumber: { type: Number, required: true, unique: true,},
    isTaken: {type: Boolean, default: false, },
    parkedCar: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', },
});

const ParkingSlot = mongoose.model('ParkingSlot', parkingSlotSchema);

export default ParkingSlot;
