/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// congifure the gatsby plugins
module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: `BIKASH THAPA`,
    author: 'Bikash Thapa Magar'
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sass',
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              name: 'src',
              path: `${__dirname}/src/`
          }
      },
      'gatsby-plugin-sharp',
      {
          resolve: 'gatsby-transformer-remark',
          options: {
              plugins: [
                  'gatsby-remark-relative-images',
                  {
                      resolve: 'gatsby-remark-images',
                      options: {
                          maxWidth: 750,
                          linkImagesToOriginal: false
                      }
                  }
              ]
          }
      },
/**********/
      {
          resolve: 'gatsby-source-contentful',
          options: {
              spaceId: process.env.CONTENTFUL_SPACE_ID,
              accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
          }
      },
/**********/
      {
          resolve :'gatsby-plugin-env-variables',
          options: {
              whitelists: ["GATSBY_GRAPHQL_IDE","CONTENTFUL_SPACE_ID","CONTENTFUL_ACCESS_TOKEN"]
          }
      },
      // 'gatsby-transformer-remark'
  ]
}
