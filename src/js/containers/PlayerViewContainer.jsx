import React from 'react';
import GradeListContainer from './GradeListContainer.jsx'
import NavBar from '../components/NavBar.jsx'
import BigCalendarContainer from '../containers/BigCalendarContainer.jsx';
// import ResourceListContainer from '../containers/ResourceListContainer.jsx';
import NavBarContainer from '../containers/NavBarContainer.jsx';
import SettingsWindowContainer from '../containers/SettingsWindowContainer.jsx';
import ClassListContainer from './ClassListContainer.jsx'





export default class PlayerViewContainer extends React.Component {
  render() {
    return(
      <div>
        <NavBarContainer/>
          <div className="player-calendar">
            <BigCalendarContainer/>
          </div>
        <ClassListContainer/>
      </div>
    );
  }
}
