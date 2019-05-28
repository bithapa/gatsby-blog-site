import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
/* rich text-react-renderer is a package that converts
the json from the contentful api to react components */

import Layout from '../components/layout'
import Head from '../components/head'

// set up the dynamic graphql query to fetch the slug and display the associated data
// use the graphql playground to test the query with query variables for eg.

// fetch the  data from the markdown post
    // export const query = graphql`
    //     query (
    //         $slug: String!
    //     ){
    //         markdownRemark (
    //             fields: {
    //                 slug: {
    //                     eq: $slug
    //                 }
    //             }
    //         ){
    //             frontmatter{
    //                 title
    //                 date
    //             }
    //             html
    //         }
    //     }
    // `

// fetch data from the contentful cms
export const query = graphql`
    query ($slug: String!) {
        contentfulBlogPost ( slug: {eq: $slug}) {
            title
            publishedDate (
                formatString: "MMMM Do, YYYY"
            )
            body {
                json
            }
        }
        }
`

const Blog = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url} />
            }
        }
    }
    return (
        <Layout>
        <Head title={props.data.contentfulBlogPost.title}/>
            <h2>
                {props.data.contentfulBlogPost.title}
            </h2>

            <p>
                {props.data.contentfulBlogPost.publishedDate}
            </p>

            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}

        </Layout>
    )
}
export default Blog
