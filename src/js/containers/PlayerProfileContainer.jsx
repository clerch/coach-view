import React from 'react'
import { connect} from 'react-redux'
import { hidePlayerProfile } from '../actions/index'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import PlayerProfileGrades from '../components/PlayerProfileGrades.jsx'

class PlayerProfileContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  handleDone() {
    this.props.hidePlayerProfile()
  }
  render() {
    return(
      <div>
        <Dialog
          open={this.props.playerProfileVisible}
        ><PlayerProfileGrades />
        <FlatButton
          label="Done"
          primary={true}
          onTouchTap={() => this.handleDone()}
        />
        </Dialog>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    playerProfileVisible: state.team.playerProfileVisible,
    playerList: state.team.playerList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    hidePlayerProfile: () => dispatch(hidePlayerProfile())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerProfileContainer)
