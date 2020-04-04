import { Collection, ObjectId } from 'mongodb';

export enum ListingStatus {
  ForSale = 'FOR_SALE',
  ForRent = 'FOR_RENT',
}

export interface Listing {
  _id: ObjectId;
  imgSrc: string;
  price: string;
  hiResImageSrc: string;
  address: string;
  zipcode: string;
  city: string;
  country: string;
  admin: string;
  status: ListingStatus;
  bedrooms: number;
  bathrooms: number;
}

export interface User {
  _id: string;
  token: string;
  name: string;
  avatar: string;
  email: string;
  savedListings: ObjectId[];
  viewedListings: ObjectId[];
}

export interface Database {
  listings: Collection<Listing>;
  users: Collection<User>;
}
