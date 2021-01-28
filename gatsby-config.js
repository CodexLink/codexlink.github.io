import dotenv from "dotenv"

dotenv.config()

module.exports = {
  siteMetadata: {
    mainTitle: "Project Typed Works",
    blogTitle: "%s | Typed Works Blog",
    portfolioTitle: "%s | %s's Portfolio",
    githubUsername: "CodexLink",
    tagline: "Unknown for now.",
    aboutDescription: "My Website (composed of my Portfolio, Projects, and Blogging) that is Statically Generated with Gatsby, Context Delivered with GraphCMS, Content Delivered with Github Pages, Designed with Material-UI and Powered by React.",
    ownerName: "Janrey Licas",
    ownerEmail: "self.codexlink@gmail.com",
    siteVersion: "0.0.1-dev.1"
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
        icon: ".src/assets/images/icon.png"
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
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: "./src/assets/",
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GraphCMS",
        fieldName: "gcmSchema",
        url: process.env.GRAPHCMS_API_URL
      }
    },
    "gatsby-transformer-sharp"
  ],
};
