import React from 'react'
import { connect } from 'react-redux'
import { openResourceWindow } from '../actions/index'
import FlatButton from 'material-ui/FlatButton'

class AddResourceButton extends React.Component {
  render() {
    let newResource = {
      name: '',
      content: '',
      resource_type: 'default resource',
      team_id: this.props.teamId
    }
    return(
      <FlatButton
        className="addResourceButton"
        onClick={() => this.props.openResourceWindow(newResource)}
        backgroundColor="#9de29d"
        hoverColor="#a3efa3"
      >New Resource
      </FlatButton>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    openResourceWindow: (resource) => dispatch(openResourceWindow(resource))
  }
}
function mapStateToProps(state) {
  return {
    teamId: state.team.teamId
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddResourceButton)
