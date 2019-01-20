import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import './index.css'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi!</h1>
    <p>Welcome to my website.</p>
    <p>I will update this someday.</p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <div>
      <h5>Connect with me</h5>
      <div id="social_links">
        <a target="_blank" href="mailto:niyifalomo@gmail.com">
          Email
        </a>
        <a target="_blank" href="https://twitter.com/OlaniyiFalomo">
          Twitter
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/olaniyifalomo/">
          Linkedin
        </a>
        <a target="_blank" href="https://github.com/niyifalomo">
          Github
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
