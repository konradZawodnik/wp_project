const axios = require('axios');

const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLSchema,
    GraphQLString,
} = require('graphql');

const NewsType = new GraphQLObjectType({
    name: 'News',
    fields: () => ({

      id: { type: GraphQLString },
      url: { type: GraphQLString },
      title: { type: GraphQLString }
    })
  });

const RootQuery = new GraphQLObjectType({
    name: 'Root',
    fields: {
        launches: {
            type: new GraphQLList(NewsType),
            resolve() {
                return axios
                    .get('https://mobileapi.wp.pl/v1/graphql')
                    .then(res => res.data);
            }
        },
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});