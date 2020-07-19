module.exports = {
  siteMetadata: {
    title: `Links`,
    description: `Links Engineering Sdn Bhd is a family run and owned performance automotive workshop, specializing in Japanese and European performance vehicles.`,
    author: `@gatsbyjs`,
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
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#F79A3C`,
        theme_color: `#F79A3C`,
        display: `minimal-ui`,
        icon: `src/images/links.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `256041198`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-page-transitions",
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://links-cms.herokuapp.com`,
        contentTypes: [`vehicle`, `tuning`],
        singleTypes: [`homepage`, `aboutpage`, `tuning-page`],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
