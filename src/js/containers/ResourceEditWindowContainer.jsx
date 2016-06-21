import React from 'react'
import { connect } from 'react-redux'
import { settingsVisible, setSeason } from '../actions/index'
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

  handleClose() {
    // this.props.hideSettings();
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
          title="Edit Resource"
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={true}
        >
        <MarkdownEditorContainer />
        </Dialog>
      </div>
    );
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
)(ResourceEditWindowContainer)
