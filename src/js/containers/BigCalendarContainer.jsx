import React from 'react';
import BigCalendar from 'react-big-calendar';
import gEvents from '../../../test_data/google_events.json';
import moment from 'moment';
import { connect } from 'react-redux'
import { deleteEvent, addTeamEvent, toggleTeamEvents, togglePlayerEvents, calculateMissedEvents } from '../actions/index'

class Calendar extends React.Component {
  componentWillMount() {
    BigCalendar.momentLocalizer(moment);
  }

  handleClick(event) {
    if (event.id) {
      this.props.deleteEvent(event)
    }
  }

  render() {
    return (
      <div className="mainCalendar" style={{height: 550}}>
        <BigCalendar
          selectable
          events={this.props.events}
          defaultDate={new Date("2016/06/20")}
          onSelectEvent={(event) => this.handleClick(event)}
          onSelectSlot={function(slotInfo) {
            if (this.props.teamEventsVisible) {
              this.props.addTeamEvent(slotInfo,this.props.addEventType)
              this.props.calculateMissedEvents()
            }
          }.bind(this)}
          defaultView='week'
          views={['month','week','day']}
          min={new Date(0, 0, 0, 4)}
          max={new Date(0, 0, 0, 23)}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.team.visibleEvents.team.concat(state.team.visibleEvents.player),
    addEventType: state.team.addEventType,
    teamEventsVisible: state.team.teamEventsVisible
  }
}
function mapDispatchToProps(dispatch) {
  return {
    deleteEvent: (event) => dispatch(deleteEvent(event)),
    calculateMissedEvents: () => dispatch(calculateMissedEvents()),
    addTeamEvent: (slots,type) => dispatch(addTeamEvent(slots,type))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar)
