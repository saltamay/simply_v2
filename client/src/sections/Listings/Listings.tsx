import React from 'react';
import { server, useQuery } from '../../lib/api';
import {
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
  const { data, refetch } = useQuery<ListingsData>(LISTINGS);

  const deleteListing = async (id: string) => {
    await server.fetch<DeleteListingData, DeleteListingVariable>({
      query: DELETE_LISTING,
      variables: {
        id
      }
    });
    refetch();
  };

  const listings = data ? data.listings : null;

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
      {listingsList}
    </>
  );
};
