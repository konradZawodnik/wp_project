import React, { Fragment } from 'react';
import LinkButton from './LinkButton';
import { Route } from 'react-router-dom';
import { Label } from 'reactstrap';
import { withRouter } from 'react-router'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const HocLinkButton = withRouter(LinkButton)

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
                    <Label
                      style={{
                        "margin-right": "1vw",
                      }}
                    >{article.title}</Label>
                    <HocLinkButton
                      to={article.url}
                      onClick={(event) => {
                        window.location.replace(article.url);
                        console.log(event);
                      }}
                    >
                      Przejdź do strony</HocLinkButton>
                  </div>
                </>
              ))}
            </>
          );
        }}
      </Query>
    </Fragment>
  )
}
export default news;
