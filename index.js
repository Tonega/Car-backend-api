// server.js
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import carRoutes from './src/routes/carRoutes.js';
import parkingRoutes from './src/routes/parkingRoutes.js';
import adminRoutes from './src/routes/adminRoutes.js';

const app = express();
dotenv.config();

// Middleware to parse JSON data
app.use(express.json());

app.use('/', carRoutes);
app.use('/', parkingRoutes);
app.use('/', adminRoutes);

const PORT = process.env.PORT || 5000;
const dbURL = process.env.MONGODB_CONNECTION_URL;
console.log(dbURL);


// Connect to MongoDB
const connect =(url)=>{
  mongoose.connect(url)
  .then(() => console.log("DB connected successfully!"))
  .catch((err)=>{
    console.log("Error connecting to DB", err.message)
  })
}
connect(dbURL)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
