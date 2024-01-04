// routes/parking.js
import express from 'express';
import parkingController from '../controllers/parkingController.js';

const router = express.Router();

router.post('/reserve', parkingController.reserveSlot);
router.get('/status', parkingController.getParkingStatus);
// Add additional routes as needed

export default router;
