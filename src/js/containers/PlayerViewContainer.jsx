import React from 'react';
// import GradeContainer from './GradeContainer.jsx'
import NavBar from '../components/NavBar.jsx'
import Table from 'material-ui/Table'

export default class PlayerViewContainer extends React.Component {
  render() {
    return(
      <div>
        <NavBar/>
        <Table/>
      </div>
    );
  }
}
