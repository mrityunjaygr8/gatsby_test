import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from "gatsby"

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        { data.allFile.nodes.map(node=> (
            <li key={node.name}>
              {node.name}
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

export default BlogPage
