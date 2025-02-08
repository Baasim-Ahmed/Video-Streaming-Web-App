import mongoose from 'mongoose';

const connectToDatabase = async () => {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error('Environment variable DATABASE_URL is not set');
  }

  try {
    // Connect to the database without deprecated options
    await mongoose.connect(databaseUrl);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Database connection failed:', error);
    throw error;
  }
};

export default connectToDatabase;
