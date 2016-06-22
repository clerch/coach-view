import React from 'react'
import TeamSettingsButton from './TeamSettingsButton.jsx'
import NotificationBadgeContainer from '../containers/NotificationBadgeContainer.jsx'

export default class NavBar extends React.Component {
  render() {
    return(
      <nav
        className="navBar"
      >
      <NotificationBadgeContainer />
      <TeamSettingsButton />
      </nav>
    )
  }
}
