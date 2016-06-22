import React from 'react'
import { connect } from 'react-redux'
import { showPlayerSchedule, showPlayerProfile } from '../actions/index'
import { Link } from 'react-router'
import FontIcon from 'material-ui/FontIcon'

class Player extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    this.props.showPlayerProfile(this.props.calId)
  }
  render () {
    let redLevel = 216 + (this.props.missedPercentage * 1.5)
    let greenLevel = 216 - (this.props.missedPercentage * 2)
    let blueLevel = 216 - (this.props.missedPercentage * 2)
    let bgColor = "rgb(" + redLevel + "," + greenLevel + "," + blueLevel + ")"

    return(
      <li
        className="playerName"
        style={{backgroundColor:bgColor}}
        onMouseEnter={() =>  this.props.showPlayerSchedule(this.props.calId)}
        onClick={() => this.handleClick()}
      >
        {this.props.children} {this.props.missedPercentage}
      </li>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    missedPercentage: Math.round(100 * (state.team.playerMissedEvents.player[ownProps.calId] / state.team.playerMissedEvents.total))
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showPlayerSchedule: (calId) => dispatch(showPlayerSchedule(calId)),
    showPlayerProfile: (calId) => dispatch(showPlayerProfile(calId))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)
