import React from 'react'
import { connect } from 'react-redux'
import { } from '../actions/index'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Tabs, Tab} from 'material-ui/Tabs';

class PlayerProfileGrades extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var tableRowNodes;
    if (this.props.grades) {
      tableRowNodes = this.props.grades.map(function(grade){
        return(
        <TableRow
          key={grade.id}
        >
          <TableRowColumn>{grade.course}</TableRowColumn>
          <TableRowColumn>{grade.assignment_type}</TableRowColumn>
          <TableRowColumn>{grade.grade}</TableRowColumn>
          <TableRowColumn>{new Date(grade.created_at).toDateString()}</TableRowColumn>
        </TableRow>
        )
      }.bind(this))
  } else {
    tableRowNodes = <TableRow></TableRow>
  }

    return (
      <Tabs
        tabItemContainerStyle={{backgroundColor:"#989898"}}
      >
        <Tab label="Grades" >
          <div
            className="playerProfileGradesTable"
          >
            <Table
              selectable={false}
            >
            <TableHeader
              adjustForCheckbox={false}
              displaySelectAll={false}
            >
              <TableRow>
                <TableHeaderColumn>Course</TableHeaderColumn>
                <TableHeaderColumn>Assignment</TableHeaderColumn>
                <TableHeaderColumn>Grade</TableHeaderColumn>
                <TableHeaderColumn>Date Added</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={false}
            >
              {tableRowNodes}
            </TableBody>
          </Table>
        </div>
      </Tab>
    </Tabs>
    )
  }
}

function mapStateToProps(state) {
  return {
    grades: state.team.activePlayerGrades
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerProfileGrades)
