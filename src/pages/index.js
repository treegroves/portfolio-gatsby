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
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Auckland.</p>
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
    file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
