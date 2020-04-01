import React from 'react';
import { Skeleton, Divider } from 'antd';

import './styles/ListingsSkeleton.css';

interface Props {
  title: string;
}

export const ListingsSkeleton = ({ title }: Props) => {
  return (
    <>
      <h2>{title}</h2>
      <div className='listings-skeleton'>
        <Skeleton active avatar={{ shape: 'square' }} paragraph={{ rows: 1 }} />
        <Divider />
        <Skeleton active avatar={{ shape: 'square' }} paragraph={{ rows: 1 }} />
        <Divider />
        <Skeleton active avatar={{ shape: 'square' }} paragraph={{ rows: 1 }} />
      </div>
    </>
  );
};
