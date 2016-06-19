import React from 'react';
import BigCalendarContainer from '../containers/BigCalendarContainer.jsx';
import PlayerListContainer from '../containers/PlayerListContainer.jsx';
import ResourceListContainer from '../containers/ResourceListContainer.jsx';
import CalendarControlPanelContainer from '../containers/CalendarControlPanelContainer.jsx';
import NavBarContainer from '../containers/NavBarContainer.jsx';
import SettingsWindowContainer from '../containers/SettingsWindowContainer.jsx'

export default class TeamViewContainer extends React.Component {
  render () {
    return(
      <div>
        <NavBarContainer />
        <PlayerListContainer />
        <BigCalendarContainer />
        <div
          className="rightPanel"
        >
          <CalendarControlPanelContainer />
          <ResourceListContainer />
          <SettingsWindowContainer />
        </div>
      </div>
    );
  }
}
