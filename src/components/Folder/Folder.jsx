/* eslint-disable react/prop-types */

// import Popup from "./Popup/Popup"
import classes from "./Folder.module.css"
import { ConnectedFolderFormContainer } from "./FolderList/FolderForm/FolderFormContainer";
// import FolderCard from "./FolderCard/FolderCard"
// import FolderSvg from "../../assets/FolderSvg"
import { ConnectedFolderListContainer } from "./FolderList/FolderListContainer"
const Folder = (props) => {
    return (
        <ul className={classes.folderBorder}>
            <div className={classes.arrayBorder}>
                <ConnectedFolderListContainer />
            </div>
            <div>
                <ConnectedFolderFormContainer />
            </div>
            {/* <div className={classes.AddFolderWrapper}>
                <FolderSvg /> <button className={classes.addFolderButton} onClick={props.popupToggler}>Добавить папку</button>
                
                <Popup 
                handleDTOInputValue = {props.handleDTOInputValue}
                handleChangeInput = {props.handleChangeInput} 
                handleColorPick = {props.handleColorPick}
                handleDTOColorValue = {props.handleDTOColorValue}

                onCreateNewFolder={props.onCreateNewFolder} 
                stateOfToggle={props.stateOfToggle} 
                popupToggler={props.popupToggler} />
                
            </div> */}
        </ul>
    )
}

export default Folder;