import React from 'react'
import ResourceList from '../components/ResourceList.jsx'
import AddResourceButton from '../components/AddResourceButton.jsx'

export default class ResourceListContainer extends React.Component {
  render() {
    return(<div>
      <div className="resourceListHeader">
      <h4>Resources</h4>
    </div>
      <div
        className="resourceListBigContainer"
      >
        <div
          className="resourceListContainer"
        >
          <ResourceList />
        </div>
      </div>
      <AddResourceButton />
      </div>
    )
  }
}
