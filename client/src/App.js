import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import News from './components/News';
import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';

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


const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Route exact path="/" component={News} />
    </Router>
  </ApolloProvider>
)


export default App;