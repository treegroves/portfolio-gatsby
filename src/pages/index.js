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

          <Link className={styles.btn} to="/projects">
            My Projects
          </Link>
          <p>
            I'm a Web Developer with a background in librarianship and community
            engagement. I started coding at the beginning of 2019 when I taught
            myself HTML & CSS and put together some static websites. I enjoyed
            thinking about UX/UI, mocking up wireframes and prototypes, then
            making them a reality with code.
          </p>

          <p>
            This experience triggered a passionate curiosity leading me deeper
            into Web Development. I wanted to know how to make a web app from
            the ground up. My first step was getting a Web Development
            certificate at Whitecliffe College; the brief but exciting course
            left me wanting more.
          </p>

          <p>
            I took a leap and enrolled in a 15-week intensive Full-Stack Web
            Development Bootcamp with Dev Academy Aotearoa. After 800 hours of
            coding, I came out the other side with the ability to create
            Full-Stack Apps, work in a team and learn effectively in a
            high-pressure environment.
          </p>
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
