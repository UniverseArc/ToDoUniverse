/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import { addTaskThunkCreator, deleteAllTasksAC, deleteTaskThunkCreator, getAllTasksThunkCreator, putCheckedOnTaskThunkCreator, putNameOfTaskThunkCreator } from "../../store/tasks/tasksReducer";
import withRouter from "../Utils/HOC/withRouter";
import { compose } from "redux";
import { deleteFolderThunkCreator, putFolderNameThunkCreator } from "../../store/folder/folderReducer";
import TasksList from "./TasksList";

class TasksListContainer extends React.Component {
    componentDidMount() {
        this.props.getAllTasks(this.props.router.params.folderId)
    }
    componentDidUpdate(prevProps) {
        if(prevProps.router.params.folderId !== this.props.router.params.folderId){
            this.props.getAllTasks(this.props.router.params.folderId)
        }
    }
    state = {
        inputTaskValue: "",
        togglerPopup: false,
        valueOfTask: "",
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
        this.setState({...this.state, inputTaskValue: e.target.value})
    }
    addTaskCallBack = () => { // TO-DO Переименовать в handle
        this.props.addTask(this.props.router.params.folderId, this.state.inputTaskValue, false)
        this.setState({
           inputTaskValue: ""
        })
    }
    handleChangeValueOfTask = (id, task, newValue) => {
        this.props.changeValueOfTask(id, task, newValue)
    }
    handleChangeCheckOfTask = (id, task, newChecked) => {
        this.props.changeCheckOfTask(id, task, newChecked)
    }
    handleChangeNameOfFolder = (id, newName, color) => {
        this.props.changeNameOfFolder(id, newName, color)
    }
    deleteTaskCallBack = (id) => {
        this.props.deleteTask(id)
    }
    deleteFolderCallBack = () => {
        
        this.props.deleteFolder(this.props.router.params.folderId)
        this.props.deleteAll()
    }
    render() {
        return (
            <TasksList 
            currentFolder={this.props.currentFolder} 
            nameOfTitle={this.props.nameOfTitle}
            colorOfTitle={this.props.colorOfTitle}
            addTaskCallBack={this.addTaskCallBack}
            deleteTaskCallBack={this.deleteTaskCallBack}
            deleteFolderCallBack={this.deleteFolderCallBack}
            popupToggler={this.popupToggler}
            handleChangeValueOfTask={this.handleChangeValueOfTask}
            handleChangeCheckOfTask={this.handleChangeCheckOfTask}
            handleChangeNameOfFolder={this.handleChangeNameOfFolder}
            handleChangeInput={this.handleChangeInput} 
            handleDTOInputValue={this.state.inputTaskValue} 
            stateOfToggle={this.state.togglerPopup} />
        )
    }
}

const mapStateToProps = (state) => {
    
    return {
        currentFolder: state.task.currentFolder,
        nameOfTitle: state.task.nameOfTitle,
        colorOfTitle: state.task.colorOfTitle,
    }
}

export default compose(
    connect(mapStateToProps, { 
        getAllTasks: getAllTasksThunkCreator,
        deleteTask: deleteTaskThunkCreator, 
        addTask: addTaskThunkCreator,
        changeCheckOfTask: putCheckedOnTaskThunkCreator,
        changeValueOfTask: putNameOfTaskThunkCreator,
        changeNameOfFolder: putFolderNameThunkCreator,
        deleteFolder: deleteFolderThunkCreator,
        deleteAll: deleteAllTasksAC,
     }),
    withRouter,
)(TasksListContainer)