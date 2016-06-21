import React from 'react'
import { connect } from 'react-redux'
import Resource from './Resource.jsx'

class ResourceList extends React.Component {
  render() {
    var resourceNodes = this.props.resources.map(function(resource) {
      return (
        <Resource
          key={resource.id}
        >
        {resource.resource_type}
        </Resource>
      )
    }.bind(this))
    return(
      <ul
        className="resourceList"
      >
        {resourceNodes}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    resources: state.team.resources
  }
}

export default connect(
  mapStateToProps
)(ResourceList)
