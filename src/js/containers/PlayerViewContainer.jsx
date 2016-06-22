import React from 'react';
// import GradeContainer from './GradeContainer.jsx'
import NavBar from '../components/NavBar.jsx'
import TableEdit from 'material-ui-table-edit'
import SnackbarContainer from './SnackbarContainer.jsx'

export default class PlayerViewContainer extends React.Component {
  render() {
    return(
      <div>
        <NavBar/>
        <TableEdit/>
        <div>
          <SnackbarContainer/>
        </div>
      </div>
    );
  }
}
