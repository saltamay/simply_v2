require('dotenv').config();
import { connectDatabase } from '../src/database';
import { listings, users } from './data';

const seed = async () => {
  try {
    console.log('[seed] : running...');

    const db = await connectDatabase();

    await db.listings.insertMany(listings);
    await db.users.insertMany(users);

    console.log('[seed] : success!');
  } catch (error) {
    throw new Error(`Failed to seed database: ${error}`);
  }
};

seed();
