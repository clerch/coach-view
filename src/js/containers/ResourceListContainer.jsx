import React from 'react'
import ResourceList from '../components/ResourceList.jsx'
import AddResourceButton from '../components/AddResourceButton.jsx'

export default class ResourceListContainer extends React.Component {
  render() {
    return(
      <div
        className="resourceListContainer"
      >
        <ResourceList />
        <AddResourceButton />
      </div>
    )
  }
}
