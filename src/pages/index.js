import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import './index.css'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`olaniyi`,`developer`,`software`,`engineer`, `application`, `react`]} />
    <h3>Hi, </h3>
    <p>I am Olaniyi, a Software Developer with a focus on back end.</p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>I will update this website someday.</p>
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
          LinkedIn
        </a>
        <a target="_blank" href="https://github.com/niyifalomo">
          GitHub
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
