import React from 'react'
import { connect } from 'react-redux'
import { settingsVisible, setSeason, closeResourceWindow } from '../actions/index'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MarkdownEditorContainer from './MarkdownEditorContainer.jsx'
const customContentStyle = {
  width: '1000px',
  height: '100%'
};

class ResourceEditWindowContainer extends React.Component {
  constructor(props) {
  super(props);

}

  handleCancel() {
    this.props.closeResourceWindow()
  }

  handleSave() {
      
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={false}
        onTouchTap={() => this.handleCancel()}
      />,
      <FlatButton
        label="Save"
        primary={true}
        onTouchTap={() => this.handleClose()}
      />
    ];

    return (
      <div>
        <Dialog
          title={this.props.resourceTitle}
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.props.resourceWindowOpen}
        >
        <MarkdownEditorContainer />
        </Dialog>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    resourceWindowOpen: state.team.resourceWindowOpen,
    resourceTitle: state.team.currentResource ? state.team.currentResource.name : 'New Resource'
  }
}

function mapDispatchToProps(dispatch) {
  return {
    closeResourceWindow: () => dispatch(closeResourceWindow())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResourceEditWindowContainer)
