// to execute run 'npm run develop'; listens to port 8000
import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
    return(
        <Layout>
            <Head title="Home"/>

            <h2>Hello!</h2>
            <h3>Hi I am Bikash Thapa and welcome to my fucking website!</h3>
            <p>If you need a developer to build a personal/professional or any fuking website like this, then you can <Link to="/contact"> contact</Link> me.</p>
            <p>In social Media, follow me on <a href="https://twitter.com/@bikashisbikash" target="_blank">Twitter</a>.</p>
        </Layout>
    )
}

export default IndexPage
