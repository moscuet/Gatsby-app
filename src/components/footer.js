import React from 'react'
import {Link,graphql,useStaticQuery} from 'gatsby'
import headerStyle from './header.module.scss' 
const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }
    }
    `)
    return (
        <footer>
            <p> Privacy policy by {data.site.siteMetadata.author}, 2020 </p>
        </footer>
    )
}
export default Footer