/* eslint-disable react/prop-types */
import React from "react";
import Folder from "./Folder";
import { connect } from "react-redux";
import { postFolderThunkCreator } from "../../store/folder/folderReducer";

class FolderContainer extends React.Component {
    state = {
        togglerPopup: false,
        inputFolderValue: "",
        colorValue: "",
    }
    popupToggler = (togglerPopup) => {
        // TO-DO перерефакторить.
        this.setState(prevState => { 
            if (prevState.togglerPopup !== togglerPopup) {
                return {
                    ...prevState,
                    togglerPopup: !(prevState.togglerPopup)
                }
            }
        })
    }
    handleChangeInput = (e) => {
        this.setState({...this.state, inputFolderValue: e.target.value})
    }
    handleColorPick = (color) => {
        
        this.setState({...this.state, colorValue: color})
    }
    onCreateNewFolder = () => {
        this.props.createFolder(this.state.inputFolderValue, this.state.colorValue)
        this.setState({
            inputFolderValue: ""
         })
    }
    render() {
        return (
            <Folder 
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
        folders: state.folder.folders
    }
}

const ConnectedFolderContainer = connect(mapStateToProps, { createFolder: postFolderThunkCreator})(FolderContainer)

export default ConnectedFolderContainer;