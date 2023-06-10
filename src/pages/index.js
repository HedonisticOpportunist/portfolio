import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="ฅ^•ﻌ•^ฅ">
      <p>ฅ/ᐠ. ̫ .ᐟ\ฅ A Portfolio ฅ/ᐠ. ̫ .ᐟ\ฅ</p>
      <StaticImage
        alt="A cat called Ghostie"
        src="../images/ghostie.jpg"
        height="200"
        width="300"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage