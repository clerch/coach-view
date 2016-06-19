import React from 'react'
import { connect } from 'react-redux'
import { toggleTeamEvents, togglePlayerEvents, setAddEventType, toggleDailyWeekly } from '../actions/index'
import classNames from 'classnames'
import CalendarControlButton from './CalendarControlButton.jsx'
import EventTypeSelectorButton from './EventTypeSelectorButton.jsx'
import DailyWeeklyToggleButton from './DailyWeeklyToggleButton.jsx'



class CalendarControlPanel extends React.Component {
  render() {
    return(
      <div className="calendarControlPanel">

        <div className="displayTogglePanel">
          <CalendarControlButton
            className="calendarControlButton bigEventControl"
            toggleEvents={function() {
              this.props.dispatch(toggleTeamEvents())
            }.bind(this)
          }
          >Team Schedule
          </CalendarControlButton>
          <CalendarControlButton
            className="calendarControlButton bigEventControl"
            toggleEvents={function() {
              this.props.dispatch(togglePlayerEvents())
            }.bind(this)
          }
          >Player Schedule
          </CalendarControlButton>
        </div>

        <div className="eventControlPanel">
          <div className="eventTypeControlPanel">
            <EventTypeSelectorButton
              className="gameEventToggle smallEventControl"
              setEventType={function() {
                this.props.dispatch(setAddEventType('GAME_EVENT'))
              }.bind(this)}
            >
            G
            </EventTypeSelectorButton>
            <EventTypeSelectorButton
              className="practiceEventToggle smallEventControl"
              setEventType={function() {
                this.props.dispatch(setAddEventType('PRACTICE_EVENT'))
              }.bind(this)}
            >
            P
            </EventTypeSelectorButton>
            <EventTypeSelectorButton
              className="workoutEventToggle smallEventControl"
              setEventType={function() {
                this.props.dispatch(setAddEventType('WORKOUT_EVENT'))
              }.bind(this)}
            >
            W
            </EventTypeSelectorButton>
            <EventTypeSelectorButton
              className="meetingEventToggle smallEventControl"
              setEventType={function() {
                this.props.dispatch(setAddEventType('MEETING_EVENT'))
              }.bind(this)}
            >
            M
            </EventTypeSelectorButton>
          </div>
          <div className="otherEventControlPanel">
            <DailyWeeklyToggleButton
              className="dailyWeeklyEventToggle bigEventControl"
              toggleDailyWeekly={function() {
                this.props.dispatch(toggleDailyWeekly())
              }.bind(this)}
            >
            {this.props.currentValue === 'daily' ? 'Weekly' : 'Daily'}
          </DailyWeeklyToggleButton>
            <CalendarControlButton
              className="commitButton bigEventControl"
            >
            Commit
            </CalendarControlButton>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentValue: state.team.dailyWeekly
  }
}

export default connect(
  mapStateToProps
)(CalendarControlPanel)
