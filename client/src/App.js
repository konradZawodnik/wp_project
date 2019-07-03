import React, { PureComponent } from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import News from './components/News';
import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';
import './App.css';

const client = new ApolloClient({
  uri: 'https://mobileapi.wp.pl/v1/graphql'
});

client.query({
  query: gql`
  query{
  articles(t: Gallery) {
        id
        url
        title
      }
    }
  `,
})
  .then(data => console.log(data))
  .catch(error => console.error(error));


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