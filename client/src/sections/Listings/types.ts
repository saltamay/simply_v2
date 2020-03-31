export interface Listing {
  id: string;
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

export interface ListingsData {
  listings: Listing[];
}

export interface DeleteListingData {
  deleteListing: Listing;
}

export interface DeleteListingVariable {
  id: string;
}
