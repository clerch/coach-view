import React from 'react'
import { connect } from 'react-redux'
import { settingsVisible, setSeason, showSnackbar } from '../actions/index'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import SnackbarContainer from './SnackbarContainer.jsx'
import SeasonRangePickerContainer from './SeasonRangePickerContainer.jsx'
import { updateSeason } from '../lib/postingFunctions'

const customContentStyle = {
  width: '30%',
};

class SettingsWindowContainer extends React.Component {
  constructor(props) {
  super(props);

  this.state = {
    startDate: this.props.season.start,
    endDate: this.props.season.end
  };
}

  componentWillReceiveProps(){
    this.setState({
        startDate: this.props.season.start,
        endDate: this.props.season.end
    })
  }

  handleClose() {
    let confirmedDates = {start: this.state.startDate, end: this.state.endDate}
    updateSeason(confirmedDates.start, confirmedDates.end, this.props.teamId)
      .then(function(res){
        if (res.ok) {
          this.props.setSeason(confirmedDates.start, confirmedDates.end)
          this.props.showSnackbar("Settings updated")
        } else {
          this.props.showSnackbar("Could not update settings")
        }
      }.bind(this))
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
    open: state.team.settingsVisible,
    season: state.team.season,
    teamId: state.team.teamId
  }
}

function mapDispatchToProps(dispatch) {
  return {
    hideSettings: () => dispatch(settingsVisible(false)),
    setSeason: (start, end) => dispatch(setSeason(start, end)),
    showSnackbar: (message) => dispatch(showSnackbar(message))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsWindowContainer)
