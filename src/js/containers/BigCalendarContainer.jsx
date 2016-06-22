import React from 'react';
import BigCalendar from 'react-big-calendar';
import gEvents from '../../../test_data/google_events.json';
import moment from 'moment';
import { connect } from 'react-redux'
import { addTeamEvent, toggleTeamEvents, togglePlayerEvents, calculateMissedEvents } from '../actions/index'

class Calendar extends React.Component {
  componentWillMount() {
    BigCalendar.momentLocalizer(moment);
  }


  render() {
    return (
      <div className="mainCalendar" style={{height: 550}}>
        <BigCalendar
          selectable
          events={this.props.events}
          defaultDate={new Date("2016/06/20")}
          onSelectEvent={event => console.log(event.start)}
          onSelectSlot={function(slotInfo) {
            if (this.props.teamEventsVisible) {
              this.props.dispatch(addTeamEvent(slotInfo,this.props.addEventType))
              this.props.dispatch(calculateMissedEvents())
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

export default connect(
  mapStateToProps
)(Calendar)
