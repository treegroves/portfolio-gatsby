import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { GatsbyImage } from "gatsby-plugin-image"

export default function About({ data }) {
  return (
    <Layout>
      <div>
        <h1>About Page</h1>
        <GatsbyImage
          image={data.file.childImageSharp.gatsbyImageData}
          style={{ width: "20vw" }}
        />
        <p>
          I'm a Web Developer with a background in librarianship and community
          engagement. I started coding at the beginning of 2019 when I taught
          myself HTML & CSS and put together some static websites. I enjoyed
          thinking about UX/UI, mocking up wireframes and prototypes, then
          making them a reality with code.
        </p>

        <p>
          This experience triggered a passionate curiosity leading me deeper
          into Web Development. I wanted to know how to make a web app from the
          ground up. My first step was getting a Web Development certificate at
          Whitecliffe College; the brief but exciting course left me wanting
          more.
        </p>

        <p>
          I took a leap and enrolled in a 15-week intensive Full-Stack Web
          Development Bootcamp with Dev Academy Aotearoa. After 800 hours of
          coding, I came out the other side with the ability to create
          Full-Stack Apps, work in a team and learn effectively in a
          high-pressure environment.
        </p>

        <h2>What drives me:</h2>

        <ol>
          <li>
            Social change: I have a passion for making the world a more
            inclusive place through the power of code - with a particular focus
            on promoting better outcomes for disabled people.
          </li>
          <li>
            Working collaboratively: I thrive in collaborative environments and
            always strive to build good team dynamics.
          </li>
          <li>
            Learning: I have a passion for understanding how things work;
            curiosity is what keeps life interesting!
          </li>
        </ol>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query AvatarAbout {
    file(relativePath: { eq: "profile2.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
