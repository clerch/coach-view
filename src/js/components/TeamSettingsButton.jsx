import React from 'react'
import { connect } from 'react-redux'
import IconButton from 'material-ui/IconButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { settingsVisible } from '../actions/index'
import FontIcon from 'material-ui/FontIcon';


class TeamSettingsButton extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose() {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <IconButton
          iconClassName="material-icons"
          onTouchTap={this.handleTouchTap.bind(this)}
          className="teamSettingsButton"
          iconStyle={{color:"honeydew"}}
        >menu</IconButton>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose.bind(this)}
        >
          <Menu
            onItemTouchTap={() => this.setState({open:false})}
            width="200px"
          >
            <MenuItem
              primaryText="Settings"
              onTouchTap={() => this.props.showSettings()}
              leftIcon={<FontIcon className="material-icons">settings</FontIcon>}
            />
            <MenuItem
              primaryText="Sign out"
              leftIcon={<FontIcon className="material-icons">account_circle</FontIcon>}

            />
          </Menu>
        </Popover>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showSettings: () => {dispatch(settingsVisible(true))}
  }
}

export default connect(
  null,
  mapDispatchToProps
)(TeamSettingsButton)
