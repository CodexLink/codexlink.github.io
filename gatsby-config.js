module.exports = {
    siteMetadata: {
        title: `Instantiated Typed Works`,
        title_secondary: `I.T.W`,
        description: `Kickstarted React Application that comes with Blogging, Written Works and Portfolio in mind.`,
        author: `CodexLink`,
        repo: `CodexLink/codexlink.github.io`,
        author_name: `Janrey Licas`,
        socials: {
            facebook: `facebookCodexLink`,
            instagram: `instagram__self.codexlink/`,
            twitter: `twitterCodexLink`,
            github: `githubCodexLink/`,
            steam: `steamcommunityid/PrismaticLunatic`,
        },
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `inst-typed-works`,
                short_name: `Instantiated Typed Works`,
                description: `A Web-App That Contains Both My Portfolio, Projects and Blogging. Both Cherrished and Instantiated Typed Works of Mine. Powered by ReactJS, GatsbyJS, Material-UI and more!`,
                start_url: `/en/`,
                lang: `en`,
                background_color: `#ffc107`,
                theme_color: `#ffc107`,
                display: `minimal-ui`,
                icon: `src/resources/images/gatsby-icon.png`, // This path is relative to the root of the site.
                crossOrigin: `use-credentials`,
                localize: [
                    {
                        start_url: `/ph/`,
                        name: `inst-typed-works`,
                        short_name: `Instantiated Typed Works`,
                        description: `Ang isang uring-web app na naglalaman ng portpolyo, proyekto at mga blogs. Mga nilalaman ay itinatangi at nabuo sa paaran ng pag type. Ito'y binubuhay gamit ang ReactJS, GatsbyJS, Material-UI at iba pa!`,
                    },
                ],
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
    ],
}
