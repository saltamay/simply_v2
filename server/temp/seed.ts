require('dotenv').config();
import { connectDatabase } from '../src/database';
import { listings } from '../src/listings';

const seed = async () => {
  try {
    console.log('[seed] : running...');

    const db = await connectDatabase();
    db.listings.insertMany(listings);

    console.log('[seed] : success!');
  } catch (error) {
    throw new Error('failed to seed database');
  }
};

seed();
