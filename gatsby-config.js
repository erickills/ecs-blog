module.exports = {
  siteMetadata: {
    title: `ec$ _`,
    author: {
      name: `Ericson Santiago`,
      summary: `I'm using this to document my personal learnings, attempts, experiments with various technologies that fascinates me, We get better by trying. Don't mind skeletor on the side haha.`,
    },
    description: `Experimental and rants`,
    siteUrl: `https://www.gatsbyjs.com/`,
    social: {
      github: `erickills`, // added by me
      siteUrl: `https://github.com/erickills/`, // added by me
      facebook: `erckills`,                     // added by me
      siteUrl: `https://facebook.com/erckills/`, // addedd by me
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
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
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ecs`, // Gatsby Start Blog
        short_name: `ecs`, // GatsbyJS
        start_url: `/`,
        background_color: `#ffffff`, 
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/skeletor-avatar.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  
}
