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
        <div className="navBarCoach">Riverton Razorsharks</div>
        <div className="navBarTeamName">Coach Chesterbomb</div>        
      </nav>
      <Footer />
      </div>
    )
  }
}
