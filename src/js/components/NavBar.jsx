import React from 'react'
import TeamSettingsButton from './TeamSettingsButton.jsx'
import Footer from './Footer.jsx'

export default class NavBar extends React.Component {
  render() {
    return(
      <div>
      <nav
        className="navBar"
      >
      <TeamSettingsButton/>
        <div className="navBarTitle">Lineup</div>
      </nav>
      <Footer />
      </div>
    )
  }
}
