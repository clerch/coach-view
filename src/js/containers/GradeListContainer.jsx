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
    {value: 'Math 200'},
    {value: 'Final'},
    {value: '60%'},
    {value: true},
    // {value: 'Michael at 4:20pm'}
  ]},
  {columns: [
    {value: 'Astrology 201'},
    {value: 'Essay'},
    {value: '75%'},
    {value: true},
    // {value: 'Someone at 5:50pm'}
  ]},
  {columns: [
    {value: 'Physics 240'},
    {value: 'Final'},
    {value: '80%'},
    {value: true},
    // {value: 'Randy at 3:33pm'}
  ]},
    {columns: [
    {value: 'History 230'},
    {value: 'Short Essay'},
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
      <TableEdit
      onChange={onChange}
      rows={rows}
      headerColumns={headers}
      />
    )
  }
}
