module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://flanagansean.com`,
    // Your Name
    name: 'Sean Flanagan',
    // Main Site Title
    title: `Sean Flanagan | Software Developer`,
    // Description that goes under your name in main bio
    description: `Software Developer based in Ann Arbor, MI!`,
    // Optional: Twitter account handle
    author: `@flanagse`,
    // Optional: Github account URL
    github: `https://github.com/FlanaganSe`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/sean-flanagan-b25271b1/`,
    // Content of the About Me section
    about: `Pragmatic optimist with an entrepreneurial side. Previously founded and built the product research company Laptologist LLC. Now a software developer at Livegistics in Detroit MI. In my free time I love playing chess, exploring new technology, rooting for Michigan Football (go blue!), distance running, and skiing & snowboarding!`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Twitter Clone',
        description:
          'A fully functional twitter clone built from scratch with a firebase database',
        link: 'https://github.com/FlanaganSe/twitter-clone',
      },
      {
        name: 'Mean Variance Optimizer',
        description:
          'Python optimizer for finding the kelly criterion. Can be used to calculate an optimal portfolio mix for given assets',
        link: 'https://github.com/FlanaganSe/Mean-Variance-Project',
      },
      {
        name: 'Tasteful Tees',
        description:
          'A node and express web app for a t-shirt retail site with an integrated mongoDB database',
        link: 'https://github.com/FlanaganSe/t-shirt-crud',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Livegistics',
        description: 'Software Developer, August 2020 - Present',
        link: 'https://livegistics.com',
      },
      {
        name: 'Laptologist LLC',
        description: 'Founder, WordPress Dev, December 2016 - May 2020',
        link: 'https://laptologist.com',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    // skills: [
    //   {
    //     name: 'Languages & Frameworks',
    //     description:
    //       'JavaScript (ES6+), TypeScript, Python, ReactJS, Node.js, Express.js',
    //   },
    //   {
    //     name: 'Technologies',
    //     description: 'MongoDB, PostgresQL, Google Firebase, Git, Adobe XD',
    //   },
    // ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
