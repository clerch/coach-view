import React from 'react';
import { connect } from 'react-redux'
import Snackbar from 'material-ui/Snackbar';
import { hideSnackbar } from '../actions/index'

class SnackbarContainer extends React.Component {

  constructor(props) {
    super(props)
  }

  handleRequestClose() {
    this.props.hideSnackbar()
  };

  render() {
    return (
        <Snackbar
          open={this.props.snackbarVisible}
          message={this.props.snackbarMessage}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose.bind(this)}
        />
    );
  }
}

function mapStateToProps(state) {
  return {
    snackbarVisible: state.team.snackbarVisible,
    snackbarMessage: state.team.snackbarMessage
  }
}

function mapDispatchToProps(dispatch) {
  return {
    hideSnackbar: () => dispatch(hideSnackbar())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SnackbarContainer)

