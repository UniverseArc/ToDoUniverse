import { folderAPI } from "../../api/folder"

const GET_ALL_FOLDERS = "GET_ALL_FOLDERS"
const ADD_FOLDER = "ADD_FOLDER"
const DELETE_FOLDER = "DELETE_FOLDER"
const CHANGE_FOLDER_NAME = "CHANGE_FOLDER_NAME"
const CHANGE_FOLDER_COLOR = "CHANGE_FOLDER_COLOR"

const initialState = {
    folders: []
}


const folderReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_FOLDERS: {
            const copyOfState = {...state, folders: action.payload}
            return copyOfState
        }
        case ADD_FOLDER: {
            const copyOfState = {...state, folders: [...state.folders, action.payload]}
            return copyOfState
        }
        case DELETE_FOLDER: {
            const copyOfState = {...state, folders: state.folders.filter(folder => {
                folder.id !== action.payload
            })}
            return copyOfState
        }
        case CHANGE_FOLDER_NAME: {
            const copyOfState = {...state, folders: [...state.folders, state.folders.find(folder => {
                if(folder.id === action.id){
                    return action.folder
                }
            })]}
            return copyOfState
        }
        //TO-DO: Отрефактроить в один CASE CHANGE_FOLDER_NAME/COLOR - когда будет работать.
        case CHANGE_FOLDER_COLOR: {
            const copyOfState = {...state, folders: [...state.folders, state.folders.find(folder => {
                if(folder.id === action.id){
                    return action.folder
                }
            })]}
            return copyOfState
        }

        default:{
            return state
        }
        
    }
}


const getAllFoldersAC = (folders) => ({type: GET_ALL_FOLDERS, payload: folders})

const postFolderAC = (folder) => ({type: ADD_FOLDER, payload: folder})

const deleteFolderAC = (id) => ({type: DELETE_FOLDER, payload: id})

const putFolderNameAC = (folder, id) => ({type: CHANGE_FOLDER_NAME, folder, id})

const putFolderColorAC = (folder, id) => ({type: CHANGE_FOLDER_COLOR, folder, id})

export const getAllFoldersThunkCreator = () => {
    return (dispatch) => {
        folderAPI.getAllFolders().then(data => (
            dispatch(getAllFoldersAC(data))
        ))
    }
}

export const postFolderThunkCreator = (name, color) => {
    return (dispatch) => {
        folderAPI.createFolder(name, color).then(data => (
            dispatch(postFolderAC(data))
        ))
    }
}

export const deleteFolderThunkCreator = (id) => {
    return (dispatch) => {
        folderAPI.deleteFolderById(id)
        .then((// Доделать, непонятно что в респонсе приходит, и как одобрить операцию на отфильтровку массива    
            dispatch((deleteFolderAC(id)))
        ))
    }
}

export const putFolderNameThunkCreator = (id, folder, newName) => { // Откуда берем folder?
    return (dispatch) => {
        folderAPI.changeFolderTitleById(id, folder, newName).then(data => (
            dispatch(putFolderNameAC(data))
        ))
    }
}

export const putFolderColorThunkCreator = (id, folder, newColor) => {
    return (dispatch) => {
        folderAPI.changeFolderColorById(id, folder, newColor).then(data => (
            dispatch(putFolderColorAC(data))
        ))
    }
}

export default folderReducer;