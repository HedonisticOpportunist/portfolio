import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
      <Layout pageTitle="About Me">
        <p>ฅ^•ﻌ•^ฅ.</p>
      </Layout>
    )
  }

export const Head = () => (
    <>
      <title>About Me</title>
      <meta name="description" content="Your description" />
    </>
  )

export default AboutPage