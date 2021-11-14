import * as React from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from "gatsby"

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
        { data.allMdx.nodes.map(node=> (
          <Link to={node.slug} key={node.id}>
            <article>
            <h2>{node.frontmatter.title}</h2>
            <p> {node.frontmatter.date}</p>
            </article>
          </Link>
          ))
        }
    </Layout>
  )
}

export default BlogPage
