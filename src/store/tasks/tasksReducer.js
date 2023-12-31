import { taskAPI } from "../../api/task"
import { addTaskDTO, putCheckedTaskDTO, putNameTaskDTO, setTasksWithFolderIdDTO } from "./TasksDTO"

const GET_TASKS = "TASKS/GET_TASKS"
const ADD_TASK = "TASKS/ADD_TASK"
const DELETE_TASK = "TASKS/DELETE_TASK"
const DELETE_ALL = "TASKS/DELETE_ALL"
const CHANGE_NAME_OF_TASK = "TASKS/CHANGE_NAME_OF_TASK"
const CHANGE_CHECKED_ON_TASK = "TASKS/CHANGE_CHECKED_ON_TASK"

const initialState = {
    currentFolder: [],
    nameOfTitle: "",
    colorOfTitle: "",
}

const tasksReducer = (state = initialState, action) => {
    switch(action.type){
        
        case GET_TASKS: {
            const copyOfState = {...state, 
                nameOfTitle: action.payload.data.name, 
                colorOfTitle: action.payload.data.color, 
                currentFolder: action.payload.data.tasks.map(task => ({...task, folderId: action.payload.folderId}))}
            return copyOfState
        }
        case ADD_TASK: {
            const copyOfState = {...state, currentFolder: [...state.currentFolder, action.payload]}
            return copyOfState
        }
        case DELETE_TASK: {
            const copyOfState = {...state, currentFolder: state.currentFolder.filter(task => {
                if( task.id !== action.payload){
                return task
               }
            })}
            return copyOfState
        }
        case DELETE_ALL: {
            const copyOfState = {...state, currentFolder: [], nameOfTitle: "", colorOfTitle: ""}
            return copyOfState
        }
        case CHANGE_NAME_OF_TASK: {
            const copyOfState = {...state, currentFolder: state.currentFolder.map(task => {
                if(task.id === action.payload.id){
                    return action.payload
                }
                return task
            })}
            return copyOfState
        }
        case CHANGE_CHECKED_ON_TASK: {
            const copyOfState = {...state, currentFolder: state.currentFolder.map(task => {
                if(task.id === action.payload.id){
                    return action.payload
                }
                return task
            })}
            return copyOfState
        }
        default:{
            return state
        }
    }
}

const getAllTasksAC = (tasks) => ({type: GET_TASKS, payload: tasks})

const addTaskAC = (task) => ({type: ADD_TASK, payload: task})

const deleteTaskAC = (id) => ({type: DELETE_TASK, payload: id})

export const deleteAllTasksAC = () => ({type: DELETE_ALL})

const putTaskNameAC = (task) => ({type: CHANGE_NAME_OF_TASK, payload: task})

const putCheckedOnTaskAC = (task) => ({type: CHANGE_CHECKED_ON_TASK, payload: task})

export const getAllTasksThunkCreator = (folderId) => {
    return (dispatch) => {
        taskAPI.getTasksByFolderId(folderId)
        .then(response => response.data)
        .then(data => {
            dispatch(getAllTasksAC(setTasksWithFolderIdDTO({data, folderId})))
        }).catch(() => [])
    }
}

export const addTaskThunkCreator = (folderId, value, checked) => {
    
    return (dispatch) => {
        taskAPI.createTaskInFolder(addTaskDTO({folderId, value, checked}))
        .then(response => response.data)
        .then(data => {
            dispatch(addTaskAC(data))
        })
    }
}

export const deleteTaskThunkCreator = (id) => {
    
    return (dispatch) => {
        
        taskAPI.deleteTaskInFolder(id)
        .then(response => response.status)
        .then(data => {
            if(data === 200){
                dispatch(deleteTaskAC(id))
            }
            else if (data !== 200){
                alert("Удалить не удалось.")
            }
        })
    }
}

export const putNameOfTaskThunkCreator = (id, task, newValue) => {
    return (dispatch) => {
        taskAPI.changeTaskValueInFolder(putNameTaskDTO({id, task, newValue}))
        .then(response => response.data)
        .then(data => {
            dispatch(putTaskNameAC(data))
        })
    }
}

export const putCheckedOnTaskThunkCreator = (id, task, newChecked) => {
    
    return (dispatch) => {
        taskAPI.changeTaskCheckedStateInFolder(putCheckedTaskDTO({id, task, newChecked}))
        .then(response => response.data)
        .then(data => {
            dispatch(putCheckedOnTaskAC(data))
        })
    }
}



export default tasksReducer;