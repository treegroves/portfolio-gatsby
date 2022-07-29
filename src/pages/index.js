import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  return (
    <Layout>
      <section className={styles.header}>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />

        <div>
          <h2>Tim Greenslade</h2>
          <h3>Full Stack Developer</h3>
          <p>Web developer based in Auckland, NZ.</p>
          <Link className={styles.btn} to="/about">
            About Me
          </Link>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Avatar {
    file(relativePath: { eq: "profile2.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
