// const axios = require('axios');

// const {
//     GraphQLObjectType,
//     GraphQLList,
//     GraphQLSchema,
//     GraphQLString,
// } = require('graphql');

// const NewsType = new GraphQLObjectType({
//     name: 'News',
//     articles: () => ({
//         id: { type: GraphQLString },
//         url: { type: GraphQLString },
//         title: { type: GraphQLString }
//     })
// });

// const RootQuery = new GraphQLObjectType({
//     name: 'RootQueryType',
//     fields: {
//       articles: {
//         type: new GraphQLList(NewsType),
//         resolve(parent, args) {
//           return axios
//             .get('https://mobileapi.wp.pl/v1/graphql')
//             .then(res => res.data);
//         }
//       },
//     }
//   });

// module.exports = new GraphQLSchema({
//     query: RootQuery,
// });

import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `
type Article {
  id: ID!                
  name: String
}
type Query {
  articles: [Article]    
}
`;

import { resolvers } from './client/src/resolvers/resolvers';
const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };