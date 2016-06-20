import React from 'react';
import { connect } from 'react-redux'
import PlayerList from '../components/PlayerList.jsx';
import PlayerLoadProgressContainer from '../containers/PlayerLoadProgressContainer.jsx';

class PlayerListContainer extends React.Component {

  render () {
    return(
      <div className="playerBox">
        <PlayerLoadProgressContainer/>
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
