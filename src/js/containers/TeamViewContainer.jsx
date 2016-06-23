import React from 'react';
import { connect } from 'react-redux'
import { setCoachId, loadTeamEvents, resetAll, loadPlayerGrades, loadPlayerData, setPlayerMissedKeys, calculateMissedEvents, setPlayerCount, loadTeamResources, setSeason } from '../actions/index'
import BigCalendarContainer from '../containers/BigCalendarContainer.jsx';
import PlayerListContainer from '../containers/PlayerListContainer.jsx';
import ResourceListContainer from '../containers/ResourceListContainer.jsx';
import CalendarControlPanelContainer from '../containers/CalendarControlPanelContainer.jsx';
import NavBarContainer from '../containers/NavBarContainer.jsx';
import SettingsWindowContainer from '../containers/SettingsWindowContainer.jsx'
import ResourceEditWindowContainer from '../containers/ResourceEditWindowContainer.jsx'
import SnackbarContainer from '../containers/SnackbarContainer.jsx'
import PlayerProfileContainer from '../containers/PlayerProfileContainer.jsx'
import { loadTeamData } from '../lib/loadingFunctions.js'

class TeamViewContainer extends React.Component {
  constructor(props) {
    super(props)
    this.props.resetAll()
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
          <PlayerProfileContainer />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    resetAll: () => dispatch(resetAll()),
    setCoachId: (id) => dispatch(setCoachId(id)),
    loadPlayer: (player) => dispatch(loadPlayerData(player)),
    setPlayerMissedKeys: (players) => dispatch(setPlayerMissedKeys(players)),
    calculateMissed: () => dispatch(calculateMissedEvents()),
    setPlayerCount: (count) => dispatch(setPlayerCount(count)),
    loadTeamResources: (resources) => dispatch(loadTeamResources(resources)),
    setSeason: (start, end) => dispatch(setSeason(start, end)),
    loadPlayerGrades: (grades) => dispatch(loadPlayerGrades(grades)),
    loadTeamEvents: (events) => dispatch(loadTeamEvents(events))
  }
}
export default connect(
  null,
  mapDispatchToProps
)(TeamViewContainer)
