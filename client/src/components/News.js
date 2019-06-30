import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_WP_NEWS = gql`
query ArticleQuery{
  articles(t: Gallery) {
      id
      url
      title
    }
  }
`;


const News = () => (
  <Fragment>
    <Query query={GET_WP_NEWS}>
      {({ loading, error, data }) => {
        if (loading) return <h4>Loading...</h4>;
        if (error) return `Error! ${error}`;

        return (
          <>
            {data.articles.map(article => (
              <>
              <div>{article.id}</div>
              <div>{article.title}</div>
              <div>{article.url}</div>
              </>
            ))}
          </>
        );
      }}
    </Query>
  </Fragment>
 );
export default News
