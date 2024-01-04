// routes/admin.js
import express from 'express';
import adminController from '../controllers/adminController.js';

const router = express.Router();

router.get('/parked-cars', adminController.getParkedCars);


export default router;
