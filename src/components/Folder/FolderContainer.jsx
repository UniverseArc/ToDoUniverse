/* eslint-disable react/prop-types */
import React from "react";
import Folder from "./Folder";
import { connect } from "react-redux";
import { getAllFoldersThunkCreator, postFolderThunkCreator } from "../../store/folder/folderReducer";

class FolderContainer extends React.Component {
    componentDidMount() {
        this.props.getFolders()
    }
    state = {
        togglerPopup: false,
        inputFolderValue: "",
        colorValue: "",
    }
    popupToggler = (togglerPopup) => {
        this.setState(prevState => { // TO-DO перерефакторить.
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
        console.log(this.state);
    }
    handleColorPick = (color) => {
        
        this.setState({...this.state, colorValue: color})
    }
    onCreateNewFolder = () => {
        
        this.props.createFolder(this.state.inputFolderValue, this.state.colorValue)
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

const ConnectedFolderContainer = connect(mapStateToProps, { getFolders: getAllFoldersThunkCreator, createFolder: postFolderThunkCreator})(FolderContainer)

export default ConnectedFolderContainer;