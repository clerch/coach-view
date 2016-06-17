import React from 'react'
import { connect } from 'react-redux'
import { toggleTeamEvents, togglePlayerEvents } from '../actions/index'
import classNames from 'classnames'
import CalendarControlButton from './CalendarControlButton.jsx'



class CalendarControlPanel extends React.Component {
  render() {
    return(
      <div className="calendarControlPanel">
        <CalendarControlButton
          toggleEvents={function() {
            this.props.dispatch(toggleTeamEvents())
          }.bind(this)
        }
        >Team Schedule
        </CalendarControlButton>
        <CalendarControlButton
          toggleEvents={function() {
            this.props.dispatch(togglePlayerEvents())
          }.bind(this)
        }
        >Player Schedule
        </CalendarControlButton>
      </div>
    )
  }
}

export default connect()(CalendarControlPanel)
