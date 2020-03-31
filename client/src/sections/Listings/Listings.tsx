import React, { useState } from 'react';
import { server } from '../../lib/api';
import {
  Listing,
  ListingsData,
  DeleteListingData,
  DeleteListingVariable
} from './types';

const LISTINGS = `
  query Listings {
    listings {
      id
      address
      price
    }
  }
`;

const DELETE_LISTING = `
  mutation DeleteListing($id: ID!) {
    deleteListing(id: $id) {
      id
      address
      price
    } 
  }
`;

interface Props {
  title: string;
}

export const Listings = ({ title }: Props) => {
  const [listings, setListings] = useState<Listing[] | null>(null);

  const fetchListings = async () => {
    const { data } = await server.fetch<ListingsData>({
      query: LISTINGS
    });

    setListings(data.listings);
  };

  const deleteListing = async (id: string) => {
    await server.fetch<DeleteListingData, DeleteListingVariable>({
      query: DELETE_LISTING,
      variables: {
        id
      }
    });
    fetchListings();
  };

  const listingsList = listings ? (
    <ul>
      {listings.map(listing => {
        return (
          <li key={listing.id}>
            {listing.address}
            <button onClick={() => deleteListing(listing.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  ) : null;

  return (
    <>
      <h2>{title}</h2>
      <button onClick={fetchListings}>Query Listings!</button>
      <div>{listingsList}</div>
    </>
  );
};
