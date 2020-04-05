import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Home, Listing, Listings, Login, NotFound, User } from './sections';
import * as serviceWorker from './serviceWorker';

import './styles/index.css';
import { Layout } from 'antd';

const client = new ApolloClient({
  uri: '/api/v1/graphql',
});

const App = () => {
  return (
    <Router>
      <Layout id='app'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/listing/:id' component={Listing} />
          <Route exact path='/listings/:location?' component={Listings} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/user/:id' component={User} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
