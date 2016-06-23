import React from 'react'
import { connect } from 'react-redux'
import { loadTeamEvents, resetModifiedEvents, toggleTeamEvents, togglePlayerEvents, setAddEventType, toggleDailyWeekly } from '../actions/index'
import classNames from 'classnames'
import CalendarControlButton from './CalendarControlButton.jsx'
import CommitButton from './CommitButton.jsx'
import EventTypeSelectorButton from './EventTypeSelectorButton.jsx'
import DailyWeeklyToggleButton from './DailyWeeklyToggleButton.jsx'
import { cleanModifiedEvents } from '../lib/cleanModifiedEvents'
import { updateTeamCalendar } from '../lib/postingFunctions'
import { getTeamData } from '../lib/loadingFunctions'

class CalendarControlPanel extends React.Component {

  handleCommit() {
    let cleanedEvents = cleanModifiedEvents(this.props.modifiedEvents)
    updateTeamCalendar(cleanedEvents,this.props.teamId)
      .then(function(res) {
        if (res.ok) {
          // sandiwch board
          console.log('updated calendar just fine')
          getTeamData.bind(this)(this.props.coachId)
        }
      }.bind(this))
    this.props.resetModifiedEvents()
  }

  render() {
    return(
      <div className="calendarControlPanel">

        <div className="displayTogglePanel">
          <CalendarControlButton
            className="calendarControlButton bigEventControl"
            toggleEvents={function() {
              this.props.toggleTeamEvents()
            }.bind(this)
          }
          >Team Schedule
          </CalendarControlButton>
          <CalendarControlButton
            className="calendarControlButton bigEventControl"
            toggleEvents={function() {
              this.props.togglePlayerEvents()
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
                this.props.setAddEventType('Game')
              }.bind(this)}
            >
            G
            </EventTypeSelectorButton>
            <EventTypeSelectorButton
              className="practiceEventToggle smallEventControl"
              setEventType={function() {
                this.props.setAddEventType('Practice')
              }.bind(this)}
            >
            P
            </EventTypeSelectorButton>
            <EventTypeSelectorButton
              className="workoutEventToggle smallEventControl"
              setEventType={function() {
                this.props.setAddEventType('Workout')
              }.bind(this)}
            >
            W
            </EventTypeSelectorButton>
            <EventTypeSelectorButton
              className="meetingEventToggle smallEventControl"
              setEventType={function() {
                this.props.setAddEventType('Meeting')
              }.bind(this)}
            >
            M
            </EventTypeSelectorButton>
          </div>
          <div className="otherEventControlPanel">
            <DailyWeeklyToggleButton
              className="dailyWeeklyEventToggle bigEventControl"
              toggleDailyWeekly={function() {
                this.props.toggleDailyWeekly()
              }.bind(this)}
            >
            {this.props.currentValue === 'daily' ? 'Weekly' : 'Daily'}
          </DailyWeeklyToggleButton>
            <CommitButton
              className="commitButton bigEventControl"
              commit={() => this.handleCommit()}
            >
            Commit
          </CommitButton>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentValue: state.team.dailyWeekly,
    modifiedEvents: state.team.modifiedEvents,
    teamId: state.team.teamId,
    coachId: state.team.coachId
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadTeamEvents: (coachId) => dispatch(loadTeamEvents(coachId)),
    toggleDailyWeekly: () => dispatch(toggleDailyWeekly()),
    toggleTeamEvents: () => dispatch(toggleTeamEvents()),
    togglePlayerEvents: () => dispatch(togglePlayerEvents()),
    setAddEventType: (type) => dispatch(setAddEventType(type)),
    resetModifiedEvents: () => dispatch(resetModifiedEvents())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarControlPanel)
