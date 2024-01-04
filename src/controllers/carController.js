// controllers/carController.js
import Car from '../models/Car.js';

const registerCar = async (req, res) => {
  try {
    const { licensePlate, ownerName, contactNumber, emailAddress } = req.body;

    // Check if the license plate is provided
    if (!licensePlate) {
      return res.status(400).json({ error: 'License plate is required.' });
    }

    const existingCar = await Car.findOne({ licensePlate });

    if (existingCar) {
      return res.status(400).json({ error: 'Car with the same license plate already exists.' });
    }

    const car = new Car({
      licensePlate,
      ownerName,
      contactNumber,
      emailAddress,
    });

    const savedCar = await car.save();

    res.status(201).json({ message: 'Car registered successfully', car: savedCar });
  } catch (error) {
    res.status(500).json({ error: 'Error registering the car.', details: error.message });
  }
};

// Get a car by its ID
const getCarById = async (req, res) => {
  try {
    const { id } = req.params;
    const car = await Car.findById(id);

    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    res.status(200).json({ message: 'Car fetched successfully', car });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching car by ID.', details: error.message });
  }
};

// Get all cars
const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json({ message: 'Cars fetched successfully', data: cars });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching cars.', details: error.message });
  }
};

export { registerCar, getCarById, getAllCars };