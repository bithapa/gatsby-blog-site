import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import aboutStyles from './about.module.scss'

const AboutPage = () => {
    return(
        <Layout>
        <Head title="About" />
            <h2>About Myself</h2>
            <p>I am nobody so you don't need to give any fuck about me.</p>
            <p className={aboutStyles.link}>But, if you would like to reach out to me please go to my <Link to="/contact">contact</Link> page.</p>
        </Layout>
    )
}

export default AboutPage
