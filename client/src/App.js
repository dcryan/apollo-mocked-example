import logo from './logo.svg';
import './App.css';

import { gql, useQuery } from '@apollo/client';

export const GET_BOOKS = gql`
  query GetBooks($id: Int) {
    books(id: $id) {
      title
    }
  }
`;

function App() {
  const { loading, data } = useQuery(GET_BOOKS, { variables: { id: 0 } });
  console.log('loading', loading);
  console.log('data', data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
