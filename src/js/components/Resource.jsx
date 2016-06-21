import React from 'react'
import { connect } from 'react-redux'
import { openResourceWindow } from '../actions/index'

class Resource extends React.Component {
  render() {
    return(
      <li
        className="resourceItem"
        onClick={() => this.props.openResourceWindow(this.props.data)}
      >{this.props.children}</li>
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
)(Resource)
