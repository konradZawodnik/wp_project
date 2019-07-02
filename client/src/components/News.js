import React, { Fragment, PureComponent } from 'react';
import { Link } from 'react-router';
import { Button, Label } from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_WP_NEWS = gql`
query GET_WP_NEWS{
  articles(t: Gallery) {
      id
      url
      title
    }
  }
`;

const news = () => {
  return (
    <Fragment>
      <Query query={GET_WP_NEWS} fetchPolicy="network-only">
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) return `Error! ${error}`;
          return (
            <>
              {data.articles.map(article => (
                <>
                  <div key={article.id}>
                    <Label>{article.title}</Label>
                    <Button>
                      <Link to={article.url} />
                    </Button>
                  </div>
                </>
              ))}
            </>
          );
        }}
      </Query>
    </Fragment>
  )
};
export default news
