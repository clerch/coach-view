import React from 'react';
import { connect } from 'react-redux'
import { getPlayers, clearPlayers } from '../actions/index'
import PlayerList from '../components/PlayerList.jsx';

class PlayerListContainer extends React.Component {
  componentWillMount() {
    fetch('http://localhost:3000/test', {method: 'GET'})
      .then(function(res) {
        return res.json();
      })
      .then(function(players) {
        this.props.dispatch(getPlayers(players))
      }.bind(this))
  }
  componentWillUnmount() {
    this.props.dispatch(clearPlayers())
  }
  render () {
    return(
      <div className="playerBox">
        <PlayerList data={this.props.data}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.team.playerList
  }
}

export default connect(
  mapStateToProps
)(PlayerListContainer)
