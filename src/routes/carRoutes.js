import express from 'express';
import { registerCar, getCarById, getAllCars } from '../controllers/carController.js';

const router = express.Router();

// Endpoint to register a new car
router.post('/cars/register', registerCar);

// Endpoint to get all cars
router.get('/cars/all', getAllCars);

// Endpoint to get a car by its ID
router.get('/cars/:id', getCarById);



export default router;