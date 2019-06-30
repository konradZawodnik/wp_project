import React, { PureComponent } from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import apolloClient from "./apolloClient";
import News from './components/News';
import './App.css';

class App extends PureComponent {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
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