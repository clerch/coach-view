import React from 'react';
import { connect } from 'react-redux'
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';

const optionsStyle = {
  maxWidth: 255,
  marginRight: 'auto',
};

class SeasonRangePickerContainer extends React.Component {
  constructor(props) {
  super(props);

  this.state = {
    minDate: this.props.startDate,
    maxDate: this.props.endDate
  };
}

  render() {
    return (
      <div>
        <DatePicker
          floatingLabelText="Season Duration"
          minDate={this.state.minDate}
          maxDate={this.state.maxDate}
        />
        <div style={optionsStyle}>
          <DatePicker
            onChange={this.props.setStart}
            floatingLabelText="Start Date"
            defaultDate={this.state.minDate}
          />
          <DatePicker
            onChange={this.props.setEnd}
            floatingLabelText="End Date"
            defaultDate={this.state.maxDate}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    startDate: state.team.season.start,
    endDate: state.team.season.end
  }
}

export default connect(
  mapStateToProps
)(SeasonRangePickerContainer)
