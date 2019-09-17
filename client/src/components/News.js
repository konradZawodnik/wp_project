import React, { Fragment } from 'react';
import { Label } from 'reactstrap';
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
              <Label style={{
                "display": "flex",
                "justifyContent": "center",
                "fontWeight": "bold",
                "fontSize": "1.8em",
              }}>
                Ciekawe artykuły z WP
                  </Label>
              {data.articles.map(article => (
                <>
                  <ul>
                    <li key={article.id}>
                      <Label
                        style={{
                          "margin-right": "1vw",
                          "fontSize": "1em",
                        }}
                      >
                        <a href={article.url}
                          style={{
                            "cursor": "pointer"
                          }}
                          onClick={(event) => {
                            window.location.replace(article.url);
                            console.log(event);
                          }}>
                          {article.title}
                        </a>
                      </Label>
                    </li>
                  </ul>
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
