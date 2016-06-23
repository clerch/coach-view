import React from 'react'
import classNames from 'classnames'

export default class CommitButton extends React.Component {
  render() {

    return(
      <div
        className={this.props.className}
        onClick={this.props.commit}
      >{this.props.children}
      </div>
    )
  }
}
