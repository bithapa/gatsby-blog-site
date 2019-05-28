// const path = require('path')
//
// // node.js API to create slug of the blog post
// //  for each node of internal type 'MarkdownRemark'
// //  uses the function path.basename() that takes the complete absolute path and the extension
// //  and returns the slug eg. given post.md returns post
// //
// // To view the node properties such as internal, type, absolutepath,
// //  place 'console.log(JSON.stringify(node, undefined, 4)) inside the if statement
// //
// //  console.log(JSON.stringify(node, undefined, 4))
// //      undefined:  types of data to display
// //      4: number of spaces between the data
// module.exports.onCreateNode = ({ node, actions }) => {
//     const { createNodeField } = actions
//
//     if (node.internal.type === 'MarkdownRemark') {
//         const slug  = path.basename(node.fileAbsolutePath, '.md')
//
//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }
// }
//
// // 1. get path to template
// // 2. get markdown data
// // 3. create new pages
// module.exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions
//
//     // path resolved to templates/blog.js
//     const blogTemplate = path.resolve('.src/templates/blog.js')
//
//     // get the markdowndata 'slug' from the nodes
//     const result = await graphql(`
//             query {
//                 allMarkdownRemark {
//                     edges {
//                         node {
//                             fields {
//                                 slug
//                             }
//                         }
//                     }
//                 }
//             }
//         `)
//
//     // iterate over the fields array to dynaically create the new pages
//     result.data.allMarkdownRemark.edges.forEach((edge) => {
//
//         // createPage() functions takes 3 arguments
//         //  @component: path to the template
//         //  @path: the actual path to this blog
//         //  @context: markdown data of the blog to display
//         createPage({
//             component: blogTemplate,
//             path: `/blog/${edge.node.fields.slug}`,
//             context: {
//                 slug: edge.node.fields.slug
//             }
//         })
//     })
// }


/***** used to generate slugs and dynamically create the pages *****/
const path = require('path')

// module.exports.onCreateNode = ({ node, actions }) => {
//     const { createNodeField } = actions
//
//     if (node.internal.type === 'MarkdownRemark') {
//         const slug = path.basename(node.fileAbsolutePath, '.md')
//
//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }
// }

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    // fetch the slug from the contentful CMS
    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}
