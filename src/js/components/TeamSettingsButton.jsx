import React from 'react'

export default class TeamSettingsButton extends React.Component {
  render() {
    return(
      <div
        className={this.props.className}
        onClick={this.props.showSettings}
      >{this.props.children}
      </div>
    )
  }
}
