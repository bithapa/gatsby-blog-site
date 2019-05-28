import React from 'react'

import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const notFound = () => {
    return (
        <Layout>
            <Head title="404: No Found"/>
            <h1>
                Page Not Found!
            </h1>
            <p>
                Click <Link to="/">here</Link> to go to home!
            </p>
        </Layout>
    )
}

export default notFound
