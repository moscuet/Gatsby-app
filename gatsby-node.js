
// nodejs > docs > choose-version > path > basename
//path.basename('/foo/bar/baz/asdf/quux.html'); // Returns: 'quux.html'
// path.basename('/foo/bar/baz/asdf/quux.html', '.html');// Returns: 'quux'

const path = require('path')

module.exports.onCreateNode = ({node,actions}) => {
    const {createNodeField} = actions
    if(node.internal.type ==='MarkdownRemark'){
        console.log(JSON.stringify(node,undefined,4)) //inspect basename 
        const slug = path.basename(node.fileAbsolutePath,'.md') //'.md' will be removed from end
        createNodeField({
            node,
            name:'slug',
            value:slug
        })
    }
    
}
// create pages: gatsbyjs.org > doc> gatsby node apis > create pages

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    // 1. get pathn to template
    //2. get markdown data
    //3. create new pages

    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    res.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
            component:blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context:{
                slug:edge.node.fields.slug
            }
        })
    })
}