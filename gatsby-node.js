
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
            node,name:'slug',
            value:slug
        })
    }
    
}
