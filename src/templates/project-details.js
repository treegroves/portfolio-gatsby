import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../styles/project-details.module.css"
import { graphql, Link } from "gatsby"

export default function ProjectDetails({ data }) {
  console.log(data)
  const { html } = data.markdownRemark
  const { title, stack, summary } = data.markdownRemark.frontmatter
  const image = getImage(
    data.markdownRemark.frontmatter.featuredImg.childImageSharp.gatsbyImageData
  )
  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <Link>
            <GatsbyImage image={image} alt="" />
          </Link>
        </div>
        <h3>{title}</h3>
        <p className="font-bold">{summary}</p>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        stack
        summary
        featuredImg {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
