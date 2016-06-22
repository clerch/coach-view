import React from 'react';
// import GradeContainer from './GradeContainer.jsx'
import NavBar from '../components/NavBar.jsx'
import TableEdit from 'material-ui-table-edit'
import BigCalendarContainer from '../containers/BigCalendarContainer.jsx';
import SettingsWindowContainer from '../containers/SettingsWindowContainer.jsx';
import GradeListContainer from './GradeListContainer.jsx'
import SnackbarContainer from './SnackbarContainer.jsx'

export default class PlayerViewContainer extends React.Component {
  render() {
    return(
      <div>
        <NavBar/>
        <GradeListContainer/>
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
