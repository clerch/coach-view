import React from 'react'
import { connect } from 'react-redux'
import { settingsVisible, setSeason } from '../actions/index'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import SeasonRangePickerContainer from './SeasonRangePickerContainer.jsx'

const customContentStyle = {
  width: '30%',
};

class SettingsWindowContainer extends React.Component {
  constructor(props) {
  super(props);

  this.state = {
    startDate: null,
    endDate: null
  };
}

  handleClose() {
    this.props.setSeason(this.state.startDate, this.state.endDate)
    this.props.hideSettings();
  };

  render() {
    const actions = [
      <FlatButton
        label="Done"
        primary={true}
        onTouchTap={this.handleClose.bind(this)}
      />
    ];

    return (
      <div>
        <Dialog
          title="Settings"
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.props.open}
        >
          <SeasonRangePickerContainer
            setStart={(event, date) => this.setState({startDate: date})}
            setEnd={(event, date) => this.setState({endDate: date})}
          />
        </Dialog>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    open: state.team.settingsVisible
  }
}

function mapDispatchToProps(dispatch) {
  return {
    hideSettings: () => dispatch(settingsVisible(false)),
    setSeason: (start, end) => dispatch(setSeason(start, end))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsWindowContainer)
