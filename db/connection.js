import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const dbConnection = mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Database connected successfully'))
.catch((error) => console.error('Database connection error:', error));