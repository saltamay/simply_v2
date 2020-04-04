require('dotenv').config();
import { connectDatabase } from '../src/database';

const clear = async () => {
  try {
    console.log('[clear] : running...');

    const db = await connectDatabase();

    const listings = await db.listings.find({}).toArray();
    const users = await db.users.find({}).toArray();

    if (listings.length > 0) {
      await db.listings.drop();
    }

    if (users.length > 0) {
      await db.users.drop();
    }

    console.log('[clear] : success!');
  } catch (error) {
    throw new Error(`Failed to clear database: ${error}`);
  }
};

clear();
