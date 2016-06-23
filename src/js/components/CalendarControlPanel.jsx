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
import { showSnackbar } from '../actions/index'
import FontIcon from 'material-ui/FontIcon'

class CalendarControlPanel extends React.Component {

  handleCommit() {
    let cleanedEvents = cleanModifiedEvents(this.props.modifiedEvents)
    updateTeamCalendar(cleanedEvents,this.props.teamId)
      .then(function(res) {
        if (res.ok) {
          this.props.showSnackbar("Committed changes successfully")
          console.log('updated calendar just fine')
          getTeamData.bind(this)(this.props.coachId)
          this.props.resetModifiedEvents()
        } else {
          this.props.showSnackbar("Could not commit events")
        }
      }.bind(this))

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
            <FontIcon
              className="material-icons"
            >stars</FontIcon>
          <p className="smallEventTypeLabel">Game</p>
            </EventTypeSelectorButton>
            <EventTypeSelectorButton
              className="practiceEventToggle smallEventControl"
              setEventType={function() {
                this.props.setAddEventType('Practice')
              }.bind(this)}
            >
              <FontIcon
                className="material-icons"
              >directions_run</FontIcon>
            <p className="smallEventTypeLabel">Practice</p>
            </EventTypeSelectorButton>
            <EventTypeSelectorButton
              className="workoutEventToggle smallEventControl"
              setEventType={function() {
                this.props.setAddEventType('Workout')
              }.bind(this)}
            >
              <FontIcon
                className="material-icons"
              >fitness_center</FontIcon>
            <p className="smallEventTypeLabel">Workout</p>
            </EventTypeSelectorButton>
            <EventTypeSelectorButton
              className="meetingEventToggle smallEventControl"
              setEventType={function() {
                this.props.setAddEventType('Meeting')
              }.bind(this)}
            >
              <FontIcon
                className="material-icons"
              >people</FontIcon>
            <p className="smallEventTypeLabel">Meeting</p>
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
    resetModifiedEvents: () => dispatch(resetModifiedEvents()),
    showSnackbar: (message) => dispatch(showSnackbar(message))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarControlPanel)
