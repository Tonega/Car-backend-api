// controllers/parkingController.js
import ParkingSlot from '../models/ParkingSlot.js';
import Car from '../models/Car.js';

// Reserve a parking slot for a car
const reserveSlot = async (req, res) => {
    try {
        const { carId, slotNumber } = req.body;

        // Check if the slot is available
        const slot = await ParkingSlot.findOne({ slotNumber, isTaken: false });

        if (!slot) {
            return res.status(400).json({ error: 'The parking slot is not available.' });
        }

        // Mark the slot as taken
        slot.isTaken = true;
        await slot.save();

        // Assign the car to the slot
        const car = await Car.findById(carId);
        car.parkedSlot = slot._id;
        await car.save();

        res.status(200).json({ message: 'Parking slot reserved successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Error reserving the parking slot.' });
    }
};

// Get parking status
const getParkingStatus = async (req, res) => {
    try {
        const parkingStatus = await ParkingSlot.find().select('slotNumber isTaken').populate('parkedCar', 'registrationNumber');
        res.status(200).json(parkingStatus);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching parking status.' });
    }
};

export default { reserveSlot, getParkingStatus,};
