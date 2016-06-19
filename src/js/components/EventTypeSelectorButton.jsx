import React from 'react'

export default class EventTypeSelectorButton extends React.Component {
  render() {

    return(
      <div
        className={this.props.className}
        onClick={this.props.setEventType}
      >{this.props.children}
      </div>
    )
  }
}
