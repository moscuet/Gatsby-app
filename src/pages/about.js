import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'
const AboutPage = () => {
    return (
        <Layout>
            <h1> About Us!</h1>
            <h2> DETAILS ABOUT US </h2>
            <Link to ='/contact'> want to wark with us?</Link>
        </Layout>
    )
}
export default AboutPage 