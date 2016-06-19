import React from 'react'
import { connect } from 'react-redux'

class DailyWeeklyToggleButton extends React.Component {
  render() {

    return(
      <div
        className={this.props.className}
        onClick={this.props.toggleDailyWeekly}
      >{this.props.children}
      </div>
    )
  }
}

export default connect()(DailyWeeklyToggleButton)
