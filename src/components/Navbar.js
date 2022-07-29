import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav>
      <h1>Tim Greenslade</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}
