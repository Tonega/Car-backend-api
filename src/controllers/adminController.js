
import ParkingSlot from '../models/ParkingSlot.js';
import Car from '../models/Car.js';

// Get information about parked cars
const getParkedCars = async (req, res) => {
    try {
        const parkedCars = await ParkingSlot.find({ isTaken: true }).populate('parkedCar', 'registrationNumber ownerName contactNumber emailAddress');
        res.status(200).json(parkedCars);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching information about parked cars.' });
    }
};

export default { getParkedCars };
