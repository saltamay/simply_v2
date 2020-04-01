import React from 'react';
import { Skeleton, Divider, Alert } from 'antd';

import './styles/ListingsSkeleton.css';

interface Props {
  title: string;
  error?: boolean;
}

export const ListingsSkeleton = ({ title, error = false }: Props) => {
  const errorAlert = error ? (
    <Alert
      message='Uh oh! Something went wrong - please try again later :('
      type='error'
      showIcon
      className='listings-skeleton__alert'
    />
  ) : null;
  return (
    <div className='listings-skeleton'>
      {errorAlert}
      <h2 className='listings-skeleton__title'>{title}</h2>
      <Skeleton active avatar={{ shape: 'square' }} paragraph={{ rows: 1 }} />
      <Divider />
      <Skeleton active avatar={{ shape: 'square' }} paragraph={{ rows: 1 }} />
      <Divider />
      <Skeleton active avatar={{ shape: 'square' }} paragraph={{ rows: 1 }} />
    </div>
  );
};
