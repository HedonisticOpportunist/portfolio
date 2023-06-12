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
      <p>👻 <a href="https://github.com/HedonisticOpportunist/drawing_app">Drawing Application</a> </p>
      <p>A drawing application created for the University of London’s <a href="https://www.london.ac.uk/courses/introduction-programming-ii">Introduction to Programming II module. </a>
      </p>
      <p>A very ambitious and colourful project that demonstrates a passion for cats and emojis. </p>
      <p>While some of the source code was provided by the lecturers, a lot of modifications were made to it, especially in regards to modifying the existing drawing tools. </p>
      <p>👻 <a href="https://github.com/HedonisticOpportunist/cats_in_neath">Cats in Neath</a> </p>
      <p>A website created for the University of London’s <a href="https://www.london.ac.uk/courses/web-development">Web Development module </a>
        .</p>
      <p>A very ambitious and colourful project that demonstrates a passion for cats and emojis. </p>
      <p>A first foray into web development, with the content and images displaying love as well as passion for owning cats.  </p>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage