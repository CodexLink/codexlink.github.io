
require("dotenv").config()

module.exports = {
  siteMetadata: {
    urlSite: "https://codexlink.github.io",
    aboutSite: "My Website (composed of my Portfolio, Projects, and Blogging) that is Statically Generated with Gatsby, Context Written with MDX, Content Delivered with Github Pages, Designed with Material-UI and Powered by React.",
    tagline: "Unknown for now.",
    userInfo: {
      ownerName: "Janrey Licas",
      githubInfo: "https://github.github.io/CodexLink",
      siteVersion: "0.0.1-dev.1"
    },
    contentTitle: {
      genericContext: "%s | Project Typed Works",
      blogContext: `%s | %s's Blog`,
      portfolioContext: `%s | %s Portfolio`,
    }
  },
  // Todo: (Read) https://www.gatsbyjs.com/plugins/gatsby-image/?=gatsby-image
  //https://medium.com/@kyle.robert.gill/ridiculously-easy-image-optimization-with-gatsby-js-59d48e15db6e
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "CodexLink's Typed Works",
        short_name: "Typed Works",
        description: "I have no idea yet.",
        lang: "en",
        start_url: "/",
        cache_busting_mode: 'none',
        crossOrigin: "use-credentials",
        // The following can be configured later.
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "standalone",
        icon: "./src/content/assets/images/icon.png"
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
      }
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: ["/blogs/", "/portfolio/"],
        // appendScript: require.resolve("./src/utils/service-worker.ts") // ! To do.
      }
    },
    "gatsby-plugin-react-helmet",
    { // To be configured.
      resolve: "gatsby-plugin-scroll-reveal",
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations
        // Advanced Options
        selector: "[data-sal]", // Selector of the elements to be animated
        animateClassName: "sal-animate", // Class name which triggers animation
        disabledClassName: "sal-disabled", // Class name which defines the disabled state
        rootMargin: "0% 50%", // Corresponds to root's bounding box margin
        enterEventName: "sal:in", // Enter event name
        exitEventName: "sal:out", // Exit event name
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap", // Learn this on Post-Development.
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        jsxPragma: "jsx",
        allExtensions: true,
      }
    },
    // ! Do this on Stable Development!
    // {
    //   resolve: "gatsby-plugin-typegen",
    //   options: {
    //     outputPath: "src/__generated__/gatsby-types.d.ts",
    //   },
    //   emitSchema: {
    //     'src/__generated__/gatsby-introspection.json': true,
    //   },
    //   emitPluginDocuments: {
    //     'src/__generated__/gatsby-plugin-documents.graphql': true,
    //   },
    // },
    "gatsby-plugin-typescript-checker",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "./src/content",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: "./src/pages",
      },
    },
    "gatsby-transformer-sharp"
  ],
}
