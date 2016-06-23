import React from 'react';
import { connect } from 'react-redux'
import PlayerList from '../components/PlayerList.jsx';
import PlayerLoadProgressContainer from '../containers/PlayerLoadProgressContainer.jsx';

class PlayerListContainer extends React.Component {

  render () {
    return(<div className="playerListMasterContainer">
      <div className="playerListHeader">
      <h4>Roster</h4>
    </div>
      <div
        className="playerListBigContainer"
      >
      <div className="playerBox">
        <PlayerLoadProgressContainer/>
        <PlayerList data={this.props.data}/>
      </div>
    </div>
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
