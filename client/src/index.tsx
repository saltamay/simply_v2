import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Listings, Login } from './sections';
import * as serviceWorker from './serviceWorker';

import './styles/index.css';
import { Layout } from 'antd';

const client = new ApolloClient({
  uri: '/api/v1/graphql',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    {/* <Listings title='Tiny Bungalow Listings' /> */}
    <Layout id='app'>
      <Login />
    </Layout>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
