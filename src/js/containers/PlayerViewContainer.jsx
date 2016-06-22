import React from 'react';
// import GradeContainer from './GradeContainer.jsx'
import NavBar from '../components/NavBar.jsx'
import TableEdit from 'material-ui-table-edit'
import BigCalendarContainer from '../containers/BigCalendarContainer.jsx';
import SettingsWindowContainer from '../containers/SettingsWindowContainer.jsx';
import GradeListContainer from './GradeListContainer.jsx'
import SnackbarContainer from '../containers/SnackbarContainer.jsx'
import { fetchPlayerData } from '../lib/loadingFunctions.js'
import {Tabs, Tab} from 'material-ui/Tabs';
import { connect } from 'react-redux'
import { resetAll, loadTeamResources, loadPlayerData, loadTeamEvents } from '../actions/index'
import ResourceListContainer from '../containers/ResourceListContainer.jsx';
// import SettingsWindowContainer from '../containers/SettingsWindowContainer.jsx'
import ResourceEditWindowContainer from '../containers/ResourceEditWindowContainer.jsx'



class PlayerViewContainer extends React.Component {
    constructor(props) {
    super(props)
    this.props.resetAll()
    fetchPlayerData.bind(this)(2)
  }
  render() {
    return(
      <div>
        <NavBar/>

        <div className="grade-table">
          <Tabs>
            <Tab label="Assignments" >
              <div>
                <GradeListContainer/>
              </div>
            </Tab>

            <Tab label="Resources" >
              <div className="resourceListContainerPlayer">
                <ResourceListContainer style={{width: '200%'}}/>
                <ResourceEditWindowContainer />
              </div>
            </Tab>
          </Tabs>
        </div>

        <div className="player-calendar">
          <BigCalendarContainer/>
        </div>

        <div>
          <SnackbarContainer/>
        </div>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    resetAll: () => dispatch(resetAll()),
    loadTeamResources: (resources) => dispatch(loadTeamResources(resources)),
    loadPlayerData: (data) => dispatch(loadPlayerData(data)),
    loadTeamEvents: (data) => dispatch(loadTeamEvents(data))
  }
}
export default connect(
  null,
  mapDispatchToProps
)(PlayerViewContainer)
