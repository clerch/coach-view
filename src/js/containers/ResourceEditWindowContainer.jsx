import React from 'react'
import { connect } from 'react-redux'
import { showSnackbar, settingsVisible, setSeason, closeResourceWindow, setCurrentResource, updateResources } from '../actions/index'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MarkdownEditorContainer from './MarkdownEditorContainer.jsx'
import TextField from 'material-ui/TextField'
import { updateResource, deleteResource, createResource } from '../lib/postingFunctions'

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

  handleDelete() {
    let newResources = this.props.resources.slice()
    let resourceIdx = this.props.resources.map((x) => x.id).indexOf(this.props.currentResource.id)
    newResources.splice(resourceIdx,1)
    deleteResource(this.props.currentResource)
      .then((res) => {
        if (res.ok) {
          this.props.updateResources(newResources)
          this.props.showSnackbar("Resource '" + this.props.currentResource.name + "' has been deleted")
        } else {
          this.props.showSnackbar("Could not delete resource '" + this.props.currentResource.name + "'")
        }
      })
    this.props.closeResourceWindow()
  }

  handleSave() {
    if (this.props.currentResource.id) {
      // update resource array and post to server
      let resourceIdx = this.props.resources.map((x) => x.id).indexOf(this.props.currentResource.id)
      let newResources = this.props.resources.slice()
      newResources[resourceIdx].content = this.props.currentResource.content
      newResources[resourceIdx].name = this.props.currentResource.name
      updateResource(this.props.currentResource)
        .then((res) => {
          if (res.ok) {
            this.props.updateResources(newResources)
            this.props.showSnackbar("Resource '" + this.props.currentResource.name + "' has been saved")
          } else {
            this.props.showSnackbar("Failed to save resource '" + this.props.currentResource.name + "'")
          }
        })

    } else {
      // save to resource array and post to server
      createResource(this.props.currentResource, this.props.teamId)
      .then(function(res) {
        return res.json();
      })
      .then((res) => {
        if (res.id) {
          this.props.setCurrentResource(null,null,res.id)
          let newResources = this.props.resources.slice()
          newResources.unshift(this.props.currentResource)
          this.props.updateResources(newResources)
          this.props.showSnackbar("Resource '" + this.props.currentResource.name + "' has been created")
        } else {
          this.props.showSnackbar("Could not create resource '" + this.props.currentResource.name + "'")
        }
      })
    }
    this.props.closeResourceWindow()
  }

  render() {
    const actions = [
      <FlatButton
        style={{color: 'red'}}
        label="Cancel"
        primary={false}
        onTouchTap={() => this.handleCancel()}
      />,
      <FlatButton
        style={{color: '#33BA11'}}
        label="Save"
        primary={true}
        onTouchTap={() => this.handleSave()}
      />
    ];

    const deleteButton =
      <FlatButton
        label="Delete"
        primary={false}
        onTouchTap={() => this.handleDelete()}
      />;

    if (this.props.currentResource.id) {
      actions.unshift(deleteButton)
    }

    return (
      <div>
        <Dialog
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.props.resourceWindowOpen}
        >
        <TextField
          name="titletextfield"
          placeholder="Title"
          defaultValue={this.props.currentResource ? this.props.currentResource.name : ''}
          className="title"
          onChange={(cb,name) => {this.props.setCurrentResource(
            null,
            name,
            null
          )}}
        />
        <MarkdownEditorContainer
          resource={this.props.currentResource}
          setCurrentResource={(content,name,id) => this.props.setCurrentResource(content,name,id)}
        />
        </Dialog>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    resourceWindowOpen: state.team.resourceWindowOpen,
    resources: state.team.resources,
    currentResource: state.team.currentResource,
    teamId: state.team.teamId
  }
}

function mapDispatchToProps(dispatch) {
  return {
    closeResourceWindow: () => dispatch(closeResourceWindow()),
    setCurrentResource: (content, name, id) => dispatch(setCurrentResource(content,name,id)),
    clearCurrentResource: () => dispatch(clearCurrentResource()),
    updateResources: (resources) => dispatch(updateResources(resources)),
    showSnackbar: (message) => dispatch(showSnackbar(message))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResourceEditWindowContainer)
