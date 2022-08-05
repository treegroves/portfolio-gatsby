import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as style from "../styles/home.module.css"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <nav>
      <h1 className={style.logo}>{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="https://github.com/treegroves">GitHub</Link>
        <Link to="https://treegroves.github.io/blog/posts/archive.html">
          Blog
        </Link>
      </div>
    </nav>
  )
}
