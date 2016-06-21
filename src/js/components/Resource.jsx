import React from 'react'

export default class Resource extends React.Component {
  render() {
    return(
      <li
        className="resourceItem"
      >{this.props.children}</li>
    )
  }
}
