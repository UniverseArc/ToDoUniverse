import { applyMiddleware, combineReducers, createStore } from "redux";
import folderReducer from "./folder/folderReducer";
import tasksReducer from "./tasks/tasksReducer";
import thunkMiddleware from "redux-thunk";


const rootReducer = combineReducers(
    {
        folder: folderReducer,
        task: tasksReducer,
    }
)

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store; 