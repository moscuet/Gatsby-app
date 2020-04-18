import React from "react"
import Footer from '../components/footer'
import Header from '../components/header'
import Layout from '../components/layout'

import {graphql, useStaticQuery} from 'gatsby'


const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark {
          edges {
            node{
                frontmatter{
                    title
                    date
                }
      
            } 
          }
        }
      }`)

    return (
        <Layout>
             <h1> Blogg </h1>
            <ol>
                {data.allMarkdownRemark.edges.map( (edge) =>{
                    return(
                        <li>
                             <h1>{ edge.node.frontmatter.title }</h1>
                             <p> { edge.node.frontmatter.date }</p>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}
export default BlogPage  
