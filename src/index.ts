// Configure NodeJS Environment Variables
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

// Set Up Api Express Server
import express, { Application, Request, Response } from 'express';
const app: Application = express();

// Api Express Server Middlewars
import morgan from 'morgan';
// app.use(morgan('dev'));

// Api Routes
import imagesRoute from './routes/images';
app.use('/api/images', imagesRoute);

// Listen To Express Server
const PORT = process.env.EXPRESS_PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅🔊 Listening at: ${PORT}`);
});
