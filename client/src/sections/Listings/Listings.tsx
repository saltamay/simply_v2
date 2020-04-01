import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql, from } from 'apollo-boost';
import { List, Avatar, Button, Spin } from 'antd';
import { ListingsSkeleton } from './components/ListingsSkeleton';
import { Listings as ListingsData } from './__generated__/Listings';
import {
  DeleteListing as DeleteListingData,
  DeleteListingVariables
} from './__generated__/DeleteListing';

import './styles/Listings.css';

const LISTINGS = gql`
  query Listings {
    listings {
      id
      address
      price
      imgSrc
    }
  }
`;

const DELETE_LISTING = gql`
  mutation DeleteListing($id: ID!) {
    deleteListing(id: $id) {
      id
      address
      price
      imgSrc
    }
  }
`;

interface Props {
  title: string;
}

export const Listings = ({ title }: Props) => {
  const { data, loading, error, refetch } = useQuery<ListingsData>(LISTINGS);

  const [
    deleteListing,
    { loading: deleteListingLoading, error: deleteListingError }
  ] = useMutation<DeleteListingData, DeleteListingVariables>(DELETE_LISTING);

  const handleDeleteListing = async (id: string) => {
    await deleteListing({ variables: { id } });

    refetch();
  };

  const listings = data ? data.listings : null;

  const listingsList = listings ? (
    <List
      itemLayout='horizontal'
      dataSource={listings}
      renderItem={listing => (
        <List.Item
          actions={[
            <Button onClick={() => handleDeleteListing(listing.id)}>
              Delete
            </Button>
          ]}
        >
          <List.Item.Meta
            title={listing.address}
            description={listing.price}
            avatar={<Avatar src={listing.imgSrc} shape='square' size={48} />}
          />
        </List.Item>
      )}
    />
  ) : null;

  if (loading) {
    return (
      <div className='listings'>
        <ListingsSkeleton title={title} />
      </div>
    );
  }

  if (error) {
    return <h2>Uh oh! Something went wrong - please try again later :(</h2>;
  }

  const deleteListingErrorMessage = deleteListingError ? (
    <h4>
      Uh oh! Something went wrong with deleting :(. Please try again soon.
    </h4>
  ) : null;

  return (
    <div className='listings'>
      <h2>{title}</h2>
      <Spin spinning={deleteListingLoading}>{listingsList}</Spin>

      {deleteListingErrorMessage}
    </div>
  );
};
