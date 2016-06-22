import React from 'react';
import { connect } from 'react-redux'
import { loadPlayerData, setPlayerMissedKeys, calculateMissedEvents, setPlayerCount, loadTeamResources } from '../actions/index'
import BigCalendarContainer from '../containers/BigCalendarContainer.jsx';
import PlayerListContainer from '../containers/PlayerListContainer.jsx';
import ResourceListContainer from '../containers/ResourceListContainer.jsx';
import CalendarControlPanelContainer from '../containers/CalendarControlPanelContainer.jsx';
import NavBarContainer from '../containers/NavBarContainer.jsx';
import SettingsWindowContainer from '../containers/SettingsWindowContainer.jsx'
import ResourceEditWindowContainer from '../containers/ResourceEditWindowContainer.jsx'
import SnackbarContainer from '../containers/SnackbarContainer.jsx'
import { loadTeamData } from '../lib/loadingFunctions.js'

class TeamViewContainer extends React.Component {
  constructor(props) {
    super(props)
    loadTeamData.bind(this)(1)
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
          <ResourceEditWindowContainer />
          <SnackbarContainer />
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
    loadTeamResources: (resources) => dispatch(loadTeamResources(resources))
  }
}
export default connect(
  null,
  mapDispatchToProps
)(TeamViewContainer)
