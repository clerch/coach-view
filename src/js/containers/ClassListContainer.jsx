import React from 'react';
import TableEdit from 'material-ui-table-edit'
import {Tabs, Tab} from 'material-ui/Tabs';
import GradeListContainer from './GradeListContainer.jsx'
import ResourceList from '../components/ResourceList.jsx'

const headers = [
  {value: 'Class', type: 'TextField', width: 100},
  {value: 'Days', type: 'TextField', width: 100},
  {value: 'Time', type: 'TextField', width: 100},
  {value: 'Passing', type: 'Toggle', width: 25},
]

const rows = [
  {columns: [
    {value: 'English'},
    {value: 'MWF'},
    {value: '12:30-1:30'},
    {value: false},
  ]},
  {columns: [
    {value: 'Class 2'},
    {value: 'TTH'},
    {value: '3:30-4:45'},
    {value: true},
  ]},
  {columns: [
    {value: 'Class 3'},
    {value: 'MWF'},
    {value: '10:00-11:30'},
    {value: true},

  ]},
    {columns: [
    {value: 'Class 4'},
    {value: 'TTH'},
    {value: '9:00-10:15'},
    {value: true},
  ]},
    {columns: [
    {value: 'Class 5'},
    {value: 'MWF'},
    {value: '9:00-9:55'},
    {value: true},
  ]},
    {columns: [
    {value: 'Class 6'},
    {value: 'MWF'},
    {value: '11:45-12:30'},
    {value: true},
  ]}


]

const onChange = (row) => {
  console.log(row)
}

export default class ClassListContainer extends React.Component {
  render () {
    return (
     <div className="grade-table">
      <Tabs>
        <Tab label="Assignments" >
          <div>
            <GradeListContainer/>
          </div>
        </Tab>
          <Tab label="Classes" >
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
