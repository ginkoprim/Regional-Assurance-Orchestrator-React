import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Regional Assurance Orchestrator</title>
        <meta property="og:title" content="Regional Assurance Orchestrator" />
      </Helmet>
    </div>
  )
}

export default Home
