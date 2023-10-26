/* eslint-disable react/prop-types */
import React from "react";
import MainPage from "./MainPage";
import { connect } from "react-redux";
import { addTaskThunkCreator, getAllTasksThunkCreator, putCheckedOnTaskThunkCreator } from "../../store/tasks/tasksReducer";
import withRouter from "../Utils/HOC/withRouter";
import { compose } from "redux";

class MainPageContainer extends React.Component {
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
    }
    handleChangeCheckOfTask = (id, task, newChecked) => {
        this.props.changeCheckOfTask(id, task, newChecked)
    }
    render() {
        return (
            <MainPage 
            addTaskCallBack={this.addTaskCallBack}
            popupToggler={this.popupToggler}
            currentFolder={this.props.currentFolder} 
            handleChangeCheckOfTask={this.handleChangeCheckOfTask}
            handleChangeInput={this.handleChangeInput} 
            handleDTOInputValue={this.state.inputTaskValue} 
            stateOfToggle={this.state.togglerPopup} />
        )
    }
}

const mapStateToProps = (state) => {
    
    return {
        currentFolder: state.task.currentFolder,
    }
}

// const ConnectedMainPageContainer = connect(mapStateToProps, { getAllTasks: getAllTasksThunkCreator })(withRouter(MainPageContainer))


export default compose(
    connect(mapStateToProps, { 
        getAllTasks: getAllTasksThunkCreator, 
        addTask: addTaskThunkCreator,
        changeCheckOfTask: putCheckedOnTaskThunkCreator }),
    withRouter,
)(MainPageContainer)