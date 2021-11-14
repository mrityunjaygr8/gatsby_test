import * as React from 'react'
import { graphql } from "gatsby"
import Layout from '../../components/layout'
import { MDXRenderer } from "gatsby-plugin-mdx"

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`


const BlogPost = ({data}) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <strong>Posted: {data.mdx.frontmatter.date}</strong>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}

export default BlogPost
