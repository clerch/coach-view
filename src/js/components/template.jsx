import React from 'react'
import { connect } from 'react-redux'
import { } from '../actions/index'

class NEWCOMPONENT extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
    <Element/>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NEWCOMPONENT)
