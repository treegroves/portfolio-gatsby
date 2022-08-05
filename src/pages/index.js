import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  return (
    <Layout>
      <section className="max-w-md mx-auto  rounded-xl overflow-hidden md:max-w-6xl">
        <div className="md:container md:mx-auto md:flex">
          <div className="md:shrink-1 lg:shrink-1">
            <GatsbyImage
              image={data.file.childImageSharp.gatsbyImageData}
<<<<<<< HEAD
              className="drop-shadow-xl rounded-md grounded-lg sm:mr-10"
=======
              className="drop-shadow-xl rounded-md grounded-lg mr-10 ml-3"
>>>>>>> c36a462e20714c96e014411904c1bf2117de31b6
            />
          </div>
          <div className="text-left">
            <h2 className="ml-3 font-bold md:text-7xl">Tim Greenslade</h2>
            <h3 className="ml-3 font-medium md:text-5xl">
              Full Stack Developer
            </h3>
            <p className="ml-3 font-medium md:text-2xl">
              Based in Auckland, NZ.
            </p>
            <Link className={styles.btn} to="/projects">
              My Projects
            </Link>
            <div className="ml-3 mr-3 text-justify">
              <p>
                I'm a Web Developer with a background in librarianship and
                community engagement. I started coding at the beginning of 2019
                when I taught myself HTML & CSS and put together some static
                websites. I enjoyed thinking about UX/UI, mocking up wireframes
                and prototypes, then making them a reality with code.
              </p>

              <p>
                This experience triggered a passionate curiosity leading me
                deeper into Web Development. I wanted to know how to make a web
                app from the ground up. My first step was getting a Web
                Development certificate at Whitecliffe College; the brief but
                exciting course left me wanting more.
              </p>

              <p className="font-bold">
                I took a leap and enrolled in a 15-week intensive Full-Stack Web
                Development Bootcamp with Dev Academy Aotearoa. After 800 hours
                of coding, I came out the other side with the ability to create
                Full-Stack Apps, work in a team and learn effectively in a
                high-pressure environment.
              </p>
            </div>
          </div>
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
