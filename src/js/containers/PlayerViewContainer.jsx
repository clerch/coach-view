import React from 'react';
import GradeListContainer from './GradeListContainer.jsx'
import NavBar from '../components/NavBar.jsx'


export default class PlayerViewContainer extends React.Component {
  render() {
    return(
      <div>
        <NavBar/>
        <GradeListContainer/>
      </div>
    );
  }
}
