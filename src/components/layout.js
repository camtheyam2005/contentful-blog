import React from 'react'
import './base.css'
import Container from './container'
// import Navigation from './navigation'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Container>
        {/* <Navigation /> */}
        {children}
        <br></br>
        © 2020 <a href="https://www.understandcovid.org/" target="_blank" style= {{color: `#272727` }}>Coronavirus Visualization Team</a>
      </Container>
    )
  }
}

export default Template
