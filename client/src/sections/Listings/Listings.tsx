import React from 'react';
import { server } from '../../lib/api';
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
  const fetchListings = async () => {
    const { data } = await server.fetch<ListingsData>({
      query: LISTINGS
    });
    console.log(data.listings);
  };

  const deleteListing = async () => {
    const { data } = await server.fetch<
      DeleteListingData,
      DeleteListingVariable
    >({
      query: DELETE_LISTING,
      variables: {
        id: '5e828ad9b7c1b326789abd29'
      }
    });
    console.log(data.deleteListing);
  };

  return (
    <>
      <h2>{title}</h2>
      <button onClick={fetchListings}>Query Listings!</button>
      <button onClick={deleteListing}>Delete a Listing!</button>
    </>
  );
};
