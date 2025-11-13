module.exports = {
  flags: {
    DEV_SSR: false
  },
  siteMetadata: {
    title: `Vibhor Mungee — Full‑Stack Lead Engineer`,
    description: `Full‑stack engineering leader in Stockholm specializing in React, Node.js, cloud (AWS/GCP), microservices, serverless and CI/CD. Building scalable, secure, high‑performance web and mobile platforms for fintech, retail and logistics.`,
    author: `Vibhor Mungee`,
    siteUrl: `https://www.vibhormungee.me`,
  },
  mapping: {
    'MarkdownRemark.frontmatter.expertise': `ExpertiseJson`
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
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#263238`,
        theme_color: `#263238`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets/images/projects/`,
        name: `projects`,
      },
    },
    `gatsby-transformer-json`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
