import React from 'react';
import { connect } from 'react-redux'
import { loadPlayerData, setPlayerMissedKeys, calculateMissedEvents, setPlayerCount } from '../actions/index'
import BigCalendarContainer from '../containers/BigCalendarContainer.jsx';
import PlayerListContainer from '../containers/PlayerListContainer.jsx';
import ResourceListContainer from '../containers/ResourceListContainer.jsx';
import CalendarControlPanelContainer from '../containers/CalendarControlPanelContainer.jsx';
import NavBarContainer from '../containers/NavBarContainer.jsx';
import SettingsWindowContainer from '../containers/SettingsWindowContainer.jsx'
import loadUsers from '../lib/loadUsers.js'

class TeamViewContainer extends React.Component {
  constructor(props) {
    super(props)
    loadUsers.bind(this)(1)
  }

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

function mapDispatchToProps(dispatch) {
  return {
    loadPlayer: (player) => dispatch(loadPlayerData(player)),
    setPlayerMissedKeys: (players) => dispatch(setPlayerMissedKeys(players)),
    calculateMissed: () => dispatch(calculateMissedEvents()),
    setPlayerCount: (count) => dispatch(setPlayerCount(count)),
    incrementPlayerLoadProgress: (count) => dispatch(incrementPlayerLoadProgress(count))
  }
}
export default connect(
  null,
  mapDispatchToProps
)(TeamViewContainer)
