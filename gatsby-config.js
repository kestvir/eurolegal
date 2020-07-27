require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `Eurolegal Baltic`,
        description: `UAB Eurolegal Baltic - is a professional Business and Legal consulting company with a team of qualified experts who offer a broad range of Legal, Tax, Financial and Business advisory services.
        `,
        author: `@VKestutis`,
        siteUrl: `https://eurolegalbaltic.com/`
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
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `PT Serif`,
                        variants: [`400`, `700`],
                    },
                    {
                        family: `Lato`,
                        variants: [`400`, `700`]
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        // {
        //   resolve: `gatsby-plugin-manifest`,
        //   options: {
        //     name: `gatsby-starter-default`,
        //     short_name: `starter`,
        //     start_url: `/`,
        //     background_color: `#663399`,
        //     theme_color: `#663399`,
        //     display: `minimal-ui`,
        //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        //   },
        // },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
