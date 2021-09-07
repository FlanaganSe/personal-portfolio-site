import { graphql } from 'gatsby';
import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Now from "../components/now";

const NowNowNow = ({ data }) => {


  return (
    <Layout>
      <SEO title="Now" />
      <Header metadata={data.site.siteMetadata} />
      <Now />
    </Layout>
  );
};

export default NowNowNow;

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
