import React from 'react';
import { server } from '../../lib/api';

const LISTINGS = `
  query Listings {
    listings {
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
    const { data } = await server.fetch({ query: LISTINGS });
    console.log(data);
  };

  return (
    <>
      <h2>{title}</h2>
      <button onClick={fetchListings}>Query Listings!</button>
    </>
  );
};
