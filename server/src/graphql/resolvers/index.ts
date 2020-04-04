import merge from 'lodash.merge';
import { listingResolvers } from './Listings';
import { viewerResolvers } from './Viewer';

export const resolvers = merge(listingResolvers, viewerResolvers);
