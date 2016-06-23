import React from 'react'
import TeamSettingsButton from './TeamSettingsButton.jsx'
import Footer from './Footer.jsx'
import NotificationBadgeContainer from '../containers/NotificationBadgeContainer.jsx'




export default class NavBar extends React.Component {
  render() {
    return(
      <div>
      <nav
        className="navBar"
      >
      <NotificationBadgeContainer />
      <TeamSettingsButton/>
        <div className="navBarTitle">Lineup</div>
      </nav>
      <Footer />
      </div>
    )
  }
}
