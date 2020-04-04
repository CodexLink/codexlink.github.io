module.exports = {
  siteMetadata: {
    title: `Signed Written Works`,
    description: `Kickstarted React Application that comes with Blogging, Written Works and Portfolio in mind.`,
    author: `@CodexLink`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `written-works`,
        short_name: `WrittenWorks`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/resources/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // @promise | Add any options here. Unknown for now.
      },
    },
    `gatsby-plugin-sass`,
  ]
}
