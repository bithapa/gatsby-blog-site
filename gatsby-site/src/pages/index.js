// to execute run 'npm run develop'; listens to port 8000
import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import indexStyles from './index.module.scss'

const IndexPage = () => {
    return(
        <Layout>
            <Head title="Home"/>

            <h2>Hello!</h2>
            <h3>I am Bikash and welcome to my website!</h3>
            <p className={indexStyles.para}>This website is under construction. Please visit again.</p>
            <p className={indexStyles.para}>In social Media, follow me on <a href="https://twitter.com/@bikashisbikash" target="_blank">Twitter</a>.</p>
        </Layout>
    )
}

export default IndexPage
