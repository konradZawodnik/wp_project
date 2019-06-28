import React, { PureComponent } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import News from './components/News';
import './App.css';

const client = new ApolloClient({
  uri: "/graphql",
  fetchOptions: {
    mode: 'no-cors',
  }
});

class App extends PureComponent {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <Route exact path="/" component={News} />
          </div>
        </Router>
      </ApolloProvider>
    )
  }
}

export default App;