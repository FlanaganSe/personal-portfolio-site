import { graphql } from 'gatsby';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Index = ({ data }) => {


  return (
    <Layout>
      <SEO title="Now" />
      <Header metadata={data.site.siteMetadata} />
      <h1>/Now</h1>
      <h2>Inspired by Derek Sivers and his NowNowNow project. This is an updating page on my life and what I'm working on</h2>


    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        linkedin
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
