import React from 'react';
import TableEdit from 'material-ui-table-edit'

const headers = [
  {value: 'Class', type: 'TextField', width: 200},
  {value: 'Assignment', type: 'TextField', width: 200},
  {value: 'Grade', type: 'TextField', width: 200},
  {value: 'Enabled', type: 'Toggle', width: 50},
  {value: 'Last Edited By', type: 'ReadOnly', width: 100}
]

const rows = [
  {columns: [
    {value: 'Michael'},
    {value: '1212 Somewhere st.'},
    {value: '555-1212'},
    {value: false},
    {value: 'Michael at 4:20pm'}
  ]},
  {columns: [
    {value: 'Sara'},
    {value: '1212 Somewhere st.'},
    {value: '555-1212'},
    {value: true},
    {value: 'Someone at 5:50pm'}
  ]},
  {columns: [
    {value: 'Randy Randerson'},
    {value: '5555 Somewhere st.'},
    {value: '888-555-3333'},
    {value: true},
    {value: 'Randy at 3:33pm'}
  ]}
]

const onChange = (row) => {
  console.log(row)
}

export default class GradeListContainer extends React.Component {
  render () {
    return (
      <TableEdit
        className='grade-list'
        onChange={onChange}
        rows={rows}
        headerColumns={headers}
      />
    )
  }
}