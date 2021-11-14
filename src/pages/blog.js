import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
        { data.allMdx.nodes.map(node=> (
            <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p> {node.frontmatter.date}</p>
            <MDXRenderer>{node.body}</MDXRenderer>
            </article>
          ))
        }
    </Layout>
  )
}

export default BlogPage
