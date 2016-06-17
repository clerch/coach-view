import React from 'react'
import { connect } from 'react-redux'
import CalendarControlPanel from '../components/CalendarControlPanel.jsx'

class CalendarControlPanelContainer extends React.Component {
  render() {
    return(
      <CalendarControlPanel />
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(
  mapStateToProps
)(CalendarControlPanelContainer)
