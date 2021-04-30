import React, { Fragment } from 'react';
import { Label } from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import './News.css';

const GET_WP_NEWS = gql`
query GET_WP_NEWS{
  articles(t: Gallery) {
      id
      url
      title
    }
  }
`;

const news = () => (
  <Fragment>
    <Query query={GET_WP_NEWS} fetchPolicy="network-only">
      {({ loading, error, data }) => {
        if (loading) return <h2 className="Loading">Loading...</h2>;
        if (error) return `Error! ${error}`;
        return (
          <Fragment>
            <Label className="Label">
              Ciekawe artykuły z WP
            </Label>
            {data.articles.map(article => (
              <ul key={article.id}>
                <li>
                  <Label
                    className="ArticleLabel"
                  >
                    <a href={article.url}
                      className="HrefElement"
                      onClick={() => {
                        window.location.replace(article.url);
                      }}
                    >
                      {article.title}
                    </a>
                  </Label>
                </li>
              </ul>
            ))}
          </Fragment>
        );
      }}
    </Query>
  </Fragment >
);

export default news;
