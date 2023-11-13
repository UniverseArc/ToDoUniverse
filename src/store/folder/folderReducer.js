import { folderAPI } from "../../api/folder"

const GET_ALL_FOLDERS = "FOLDERS/GET_ALL_FOLDERS"
const ADD_FOLDER = "FOLDERS/ADD_FOLDER"
const DELETE_FOLDER = "FOLDERS/DELETE_FOLDER"
const CHANGE_FOLDER_NAME = "FOLDERS/CHANGE_FOLDER_NAME"
const CHANGE_FOLDER_COLOR = "FOLDERS/CHANGE_FOLDER_COLOR"

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
                //TO-DO: Постоянно сталкивался с хуйней по типу 9 числовое не равно "9" в строке, которую присылал сервак. Такое фиксится TS вообще? Можно и VanillaJS, но обычно с таким сталкиваешься мало, ибо есть TS?
                if(folder.id != action.payload){
                    return folder
                }
            })}
            return copyOfState
        }
        //TO-DO: Спросить, можно ли это как-то сделать через find (оптимизация типа), стоит ли вообще делать через find мб map не так много и забирает?
        case CHANGE_FOLDER_NAME: {
            const copyOfState = {...state, folders: state.folders.map(folder => {
                if(folder.id == action.payload.id){
                    return action.payload.folder
                }
                return folder
            })}
            return copyOfState
        }
        //TO-DO: Отрефактроить в один CASE CHANGE_FOLDER_NAME/COLOR - когда будет работать.
        // case CHANGE_FOLDER_COLOR: {
        //     const copyOfState = {...state, folders: [...state.folders, state.folders.find(folder => {
        //         if(folder.id === action.payload.id){
        //             return action.payload.folder
        //         }
        //     })]}
        //     return copyOfState
        // }

        default:{
            return state
        }
        
    }
}


const getAllFoldersAC = (folders) => ({type: GET_ALL_FOLDERS, payload: folders})

const postFolderAC = (folder) => ({type: ADD_FOLDER, payload: folder})

const deleteFolderAC = (id) => ({type: DELETE_FOLDER, payload: id})

const putFolderNameAC = (folder, id) => ({type: CHANGE_FOLDER_NAME, payload: {folder, id}})

const putFolderColorAC = (folder, id) => ({type: CHANGE_FOLDER_COLOR, payload: {folder, id}})

export const getAllFoldersThunkCreator = () => {
    return (dispatch) => {
        folderAPI.getAllFolders()
        .then(response => response.data)
        .then(data => (
            dispatch(getAllFoldersAC(data))
        ))
    }
}

export const postFolderThunkCreator = (name, color) => {
    return (dispatch) => {
        folderAPI.createFolder(name, color)
        .then(response => response.data)
        .then(data => (
            dispatch(postFolderAC(data))
        ))
    }
}

export const deleteFolderThunkCreator = (id) => {
    return (dispatch) => {
        folderAPI.deleteFolderById(id)
        .then(response => response.status)
        .then(data =>{
            if(data === 200){
                dispatch((deleteFolderAC(id)))
            }
            else if (data !== 200){
                alert("Удалить не удалось.")
            }
        })
    }
}

export const putFolderNameThunkCreator = (id, newName, color) => {
    return (dispatch) => {
        folderAPI.changeFolderTitleById(id, newName, color)
        .then(response => response.data)
        .then(data => (
            dispatch(putFolderNameAC(data, id))
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