import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>ฅ^•ﻌ•^ฅ.</p>
      <p> Anita is a mysterious creature who thrives on knowledge and has a habit of collecting books, along with an assortment of plushies that live on her bookshelf. </p>
      <p> She also is known as a notorious night owl who enjoys programming, watching horror anthology shows and goes on swimming on a regular basis. </p>
      <p>Anita is also the co-owner of two naughty cats called Ghost and Snow. </p>
      <StaticImage
        alt="Ghost and Snow"
        src="../images/cats.jpg"
        height="300"
        width="300"
      />

      <p>Below, you can find some of her other internet haunts: </p>
      <p>Readers beware, you may be in for a scare!</p>
      <p>Joking, just be aware that I'm still learning. </p>

      <p>👻 <a href="https://www.linkedin.com/in/anita-pal-6549a157/"> LinkedIn</a> </p>
      <p>👻 <a href="https://github.com/HedonisticOpportunist">GitHub</a> </p>
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