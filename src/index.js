import React from 'react';
import ReactDOM from 'react-dom';

import {ApolloClient, InMemoryCache, HttpLink, gql, ApolloProvider} from "@apollo/client";
import './index.css';
import App from './App';

const URL = "https://salty-cove-78545.herokuapp.com/";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: URL
  })
});




ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
