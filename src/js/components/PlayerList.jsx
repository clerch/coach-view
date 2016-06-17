import React from 'react';
import { connect } from 'react-redux'
import Player from './Player.jsx';
import { showPlayerSchedule } from '../actions/index'

class PlayerList extends React.Component {
  render () {
    var playerNodes = this.props.data.map(function(player) {
      return (
        <Player
          key={player.id}
          calId={player.calId}
        >
          {player.name}
        </Player>
      );
    }.bind(this));
    return(
      <ul
        className="playerList"
        onMouseLeave={
          function() {
            this.props.dispatch(showPlayerSchedule(null))
          }.bind(this)
        }
        >
        {playerNodes}
      </ul>
    );
  }
}

export default connect()(PlayerList)
