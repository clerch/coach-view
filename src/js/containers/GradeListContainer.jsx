import React from 'react';
import TableEdit from 'material-ui-table-edit'
import {Tabs, Tab} from 'material-ui/Tabs';
import ResourceList from '../components/ResourceList.jsx'

const headers = [
  {value: 'Class', type: 'TextField', width: 100},
  {value: 'Assignment', type: 'TextField', width: 100},
  {value: 'Grade', type: 'TextField', width: 100},
  {value: 'Submitted', type: 'Toggle', width: 25},
  // {value: 'Last Edited By', type: 'ReadOnly', width: 30}
]

const rows = [
  {columns: [
    {value: 'Class 1'},
    {value: 'Test 1'},
    {value: '60%'},
    {value: false},
    // {value: 'Michael at 4:20pm'}
  ]},
  {columns: [
    {value: 'Class 2'},
    {value: 'Assignment 1'},
    {value: '75%'},
    {value: true},
    // {value: 'Someone at 5:50pm'}
  ]},
  {columns: [
    {value: 'Class 3'},
    {value: 'Assignment 2'},
    {value: '80%'},
    {value: true},
    // {value: 'Randy at 3:33pm'}
  ]},
    {columns: [
    {value: 'Class 4'},
    {value: 'Assignment 2'},
    {value: '80%'},
    {value: true},
    // {value: 'Randy at 3:33pm'}
  ]},
    {columns: [
    {value: 'Class 5'},
    {value: 'Assignment 5'},
    {value: '80%'},
    {value: true},
    // {value: 'Randy at 3:33pm'}
  ]},
    {columns: [
    {value: 'Class 6'},
    {value: 'Assignment 2'},
    {value: '80%'},
    {value: true},
    // {value: 'Randy at 3:33pm'}
  ]}


]

const onChange = (row) => {
  console.log(row)
}

export default class GradeListContainer extends React.Component {
  render () {
    return (
    <div className="grade-table">
      <Tabs>
        <Tab label="Assignments" >
          <div>
            <TableEdit 
            onChange={onChange}
            rows={rows}
            headerColumns={headers}
            />
          </div>
        </Tab>
          <Tab label="Resources" >
            <div className="resourceListContainer">
              <ResourceList/>
            </div>
          </Tab>
      </Tabs>
    </div> 
    )
  }
}
