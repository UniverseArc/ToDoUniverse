import { taskAPI } from "../../api/task"

const GET_TASKS = "GET_TASKS"
const ADD_TASK = "ADD_TASK"
const DELETE_TASK = "DELETE_TASK"
const CHANGE_NAME_OF_TASK = "CHANGE_NAME_OF_TASK"
const CHANGE_CHECKED_ON_TASK = "CHANGE_CHECKED_ON_TASK"

const initialState = {
    currentFolder: []
}

const tasksReducer = (state = initialState, action) => {
    switch(action.type){
        
        case GET_TASKS: {
            const copyOfState = {...state, currentFolder: [...action.tasks.map(task => ({...task, folderId: action.folderId}))]} // TO-DO: Доделать
            return copyOfState
        }
        case ADD_TASK: {
            const copyOfState = {...state, currentFolder: [...state.currentFolder, action.payload]}
            return copyOfState
        }
        case DELETE_TASK: {
            const copyOfState = {...state, currentFolder: state.currentFolder.filter(task => {
                task.id !== action.payload
            })}
            return copyOfState
        }
        case CHANGE_NAME_OF_TASK: {
            const copyOfState = {...state, currentFolder: [...state.currentFolder,  state.currentFolder.find(task => {
                if(task.id === action.task.id){
                    return action.task
                }
            })]}
            return copyOfState
        }
        case CHANGE_CHECKED_ON_TASK: {
            const copyOfState = {...state, currentFolder: state.currentFolder.map(task => {
                if(task.id === action.task.id){
                    return action.task
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

const getAllTasksAC = (tasks, folderId) => ({type: GET_TASKS, tasks: tasks, folderId: folderId})

const addTaskAC = (task) => ({type: ADD_TASK, payload: task})

const deleteTaskAC = (id) => ({type: DELETE_TASK, payload: id})

const putTaskNameAC = (task, id) => ({type: CHANGE_NAME_OF_TASK, task, id})

const putCheckedOnTaskAC = (task) => ({type: CHANGE_CHECKED_ON_TASK, task})

export const getAllTasksThunkCreator = (folderId) => {
    
    console.log(folderId);
    return (dispatch) => {
        
        taskAPI.getTasksByFolderId(folderId).then(data => {
            debugger
            dispatch(getAllTasksAC(data, folderId))
        })
    }
}

export const addTaskThunkCreator = (folderId, value, checked) => {
    
    return (dispatch) => {
        taskAPI.createTaskInFolder({folderId, value, checked}).then(data => {
            //TO-DO: createTaskInFolder возможно нуждается в доснабжении параметрами в API.
            dispatch(addTaskAC(data))
        })
    }
}

export const deleteTaskThunkCreator = (id) => {
    return (dispatch) => {
        taskAPI.deleteTaskInFolder(id).then(data => {
            dispatch(deleteTaskAC(data))
        })
    }
}

export const putNameOfTaskThunkCreator = ({id, task, newValue}) => {
    return (dispatch) => {
        taskAPI.changeTaskValueInFolder({id, task, newValue}).then(data => {
            dispatch(putTaskNameAC(data))
        })
    }
}

export const putCheckedOnTaskThunkCreator = (id, task, newChecked) => {
    
    return (dispatch) => {
        taskAPI.changeTaskCheckedStateInFolder(id, task, newChecked).then(data => {
            dispatch(putCheckedOnTaskAC(data))
        })
    }
}



export default tasksReducer;