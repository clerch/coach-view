import React from 'react'

export default class AddResourceButton extends React.Component {
  render() {

    return(
      <div
        className="addResourceButton"
        onClick={this.props.toggleEvents}
      >+
      </div>
    )
  }
}
