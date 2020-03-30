import { Collection, ObjectId } from 'mongodb';

export interface Listing {
  _id: ObjectId;
  imgSrc: string;
  price: string;
  hiResImageSrc: string;
  address: string;
  zipcode: string;
  city: string;
  state: string;
  status: string;
  bedrooms: number;
  bathrooms: number;
}

export interface Database {
  listings: Collection<Listing>;
}
