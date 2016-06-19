import React from 'react'
import TeamSettingsButton from './TeamSettingsButton.jsx'

export default class NavBar extends React.Component {
  render() {
    return(
      <nav
        className="navBar"
      >Coach View
      <TeamSettingsButton
        className="teamSettingsButton"
        showSettings={
          function() {
            alert('show settings')
          }
        }
      />
      </nav>
    )
  }
}
