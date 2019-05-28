import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

// fetch the title, date, & slug of the post
const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                sort: {
                    fields: publishedDate,
                    order: DESC
                }
            ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate (formatString: "MMMM Do, YYYY")
                        # for all the date format go to :
                        # momentjs.com/docs -> Display
                    }
                }
            }
        }
    `)

    return(
        <Layout>
            <Head title="Blog"/>
            <h2>Things I Write About!</h2>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post }>
                            <Link to={`blog/${edge.node.slug}`}>
                                <h2>
                                    {edge.node.title}
                                </h2>
                                <p>{edge.node.publishedDate}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage
