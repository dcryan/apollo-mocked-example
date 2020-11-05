import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { GET_BOOKS } from './App';
import reportWebVitals from './reportWebVitals';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const mocks = [
  {
    request: {
      query: GET_BOOKS,
    },
    result: {
      data: {
        books: [
          {
            title: "test",
            author: 'Author',
            __typename: "test"
          },
          {
            title: 'test2',
            author: 'Author2',
          },
        ],
      },
    },
  },
];

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <MockedProvider mocks={mocks} addTypename>
        <App />
      </MockedProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
