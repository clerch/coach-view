import React from 'react';
import { connect} from 'react-redux'
import LinearProgress from 'material-ui/LinearProgress';

class PlayerLoadProgressContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      style: {height: "5px", borderRadius:"0px"},
    }
  }

  componentWillUpdate() {
    if (this.props.totalPlayers !== 0 && (this.props.totalPlayers === this.props.retrievedPlayers + 1)) {
      this.setState({style: {height: "0px", transition:"height 0.3s", transitionDelay:"1s"}})
    }
  }

  render() {
    return (
      <LinearProgress
        mode="determinate"
        value={this.props.retrievedPlayers}
        max={this.props.totalPlayers}
        style={this.state.style}/>
    );
  }
}
function mapStateToProps(state) {
  return {
    totalPlayers: state.team.playerCount,
    retrievedPlayers: state.team.playerList.length
  }
}
export default connect(
  mapStateToProps
)(PlayerLoadProgressContainer)
