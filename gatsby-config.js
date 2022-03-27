module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://flanagansean.com`,
    // Your Name
    name: 'Sean Flanagan',
    // Main Site Title
    title: `Sean Flanagan | Software Dev`,
    // Description that goes under your name in main bio
    description: `Software Dev in Ann Arbor, MI`,
    // Optional: Twitter account handle
    author: `@flanagse`,
    // Optional: Github account URL
    github: `https://github.com/FlanaganSe`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/sean-flanagan-b25271b1/`,
    // Content of the About Me section
    about: `Optimist who likes coding, research, chess, Michigan athletics (go blue!), distance running, and skiing!`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Mean Variance Optimizer',
        description:
          'Python optimizer for finding the kelly criterion. Can be used to calculate an optimal portfolio mix for given assets',
        link: 'https://github.com/FlanaganSe/Mean-Variance-Project',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: "Life skills",
        description:
          "Being the first person cats run up to when entering a room, never getting a cavity despite a candy addiction, getting the fastest 5th grader award in elemetary school. Hmmm I may be missing some but that should cover my main skills...",
      },
      {
        name: "Technologies I enjoy",
        description: `I love React and Typescript! Otherwise I don't have any ringing passions and will work with whatever tech needs to be used to best build the app at hand.`,
      },
    ],
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
