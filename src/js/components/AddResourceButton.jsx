import React from 'react'
import { connect } from 'react-redux'
import { openResourceWindow } from '../actions/index'

class AddResourceButton extends React.Component {
  render() {
    let newResource = {
      name: '',
      content: ''
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

export default connect(
  null,
  mapDispatchToProps
)(AddResourceButton)
