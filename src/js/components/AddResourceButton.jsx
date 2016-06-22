import React from 'react'
import { connect } from 'react-redux'
import { openResourceWindow } from '../actions/index'

class AddResourceButton extends React.Component {
  render() {
    let newResource = {
      name: '',
      content: '',
      resource_type: 'default resource',
      team_id: this.props.teamId
    }
    return(
      <div
        className="addResourceButton"
        onClick={() => this.props.openResourceWindow(newResource)}
      >+
      </div>
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
