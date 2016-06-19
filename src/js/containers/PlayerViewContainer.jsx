import React from 'react';
import GradeContainer from './GradeContainer.jsx'
import NavBar from '../components/NavBar.jsx'

export default class PlayerViewContainer extends React.Component {
  render() {
    return(
      <div>
        <NavBar/>
        <GradeContainer/>
      </div>
    );
  }
}
