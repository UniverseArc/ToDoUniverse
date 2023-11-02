/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import ChangeValueTask from "./ChangeValueTask.jsx/ChangeValueTask";

class ChangeValueTaskContainer extends React.Component {
    componentDidMount() {
       
    }
    state = {
        editMode: false,
        inputTaskValue: "",
    }
    render() {
        return (
            <ChangeValueTask 
            handleChangeInput = {this.handleChangeInput}
            handleDTOInputValue = {this.state.inputFolderValue}
            handleColorPick = {this.handleColorPick}
            handleDTOColorValue = {this.state.colorValue}
            
            onCreateNewFolder={this.onCreateNewFolder} 
            folders={this.props.folders} 
            popupToggler={this.popupToggler} 
            stateOfToggle={this.state.togglerPopup} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        currentFolder: state.task.currentFolder,
    }
}

const ConnectedChangeValueTaskContainer = connect(mapStateToProps, {})(ChangeValueTaskContainer)

export default ConnectedChangeValueTaskContainer;