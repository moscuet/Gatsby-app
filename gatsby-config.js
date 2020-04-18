/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {
    title: 'Fullstack Developer!',
    author: 'M.Rahman'
  },

  plugins: ['gatsby-plugin-sass',
              {
                resolve: `gatsby-source-filesystem`,
                options: {
                  name: `src`,
                  path: `${__dirname}/src/`
                }
              
              },
              'gatsby-transformer-remark'

            ]
}
