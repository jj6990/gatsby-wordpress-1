import React from 'react';
import Typography from '../styles/Typography';
import GlobalStyles from '../styles/GlobalStyles';
import { StaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet"

export default function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
         query LayoutQuery {
           site {
             siteMetadata {
               title
             }
           }
         }
       `}
      render={data => (
        <>
          <Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`} defaultTitle={data.site.siteMetadata.title} />
          <div>
            <GlobalStyles />
            <Typography />
            {children}
          </div>
        </>
      )}
    />
  );
}