import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectToDB } from './config/db.js';
import appRouter from './routes/index.js';

dotenv.config();
connectToDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic routes
app.get('/', (req, res) => {
  res.send('Welcome to TC-web88 server');
});

// Mount Routers

app.use('/api', appRouter);

// Global error handler (simple)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Somethings went wrong');
});

app.listen(PORT, () => {
  console.log(`Server is running in 
        ${process.env.NODE_ENV || 'development'} mode 
        on port ${PORT}
        `);
});



  