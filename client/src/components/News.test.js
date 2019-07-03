import React from 'react';
import News from './News';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import renderer from 'react-test-renderer';

const client = new ApolloClient({
    uri: 'https://mobileapi.wp.pl/v1/graphql'
});

it('should match snapshot', () => {
    const tree = renderer
        .create(
            <ApolloProvider client={client}>
                <News />
            </ApolloProvider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})