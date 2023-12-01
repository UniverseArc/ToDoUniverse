/* eslint-disable react/prop-types */

// import Popup from "./Popup/Popup"
import classes from "./Folder.module.css"
import ConnectedFolderForm from "./FolderForm/FolderForm.container";
import ConnectedFolderList from "./FolderList/FolderList.container";
// import FolderSvg from "../../assets/FolderSvg"
const Folder = () => {
    return (
        <ul className={classes.folderBorder}>
            <div className={classes.arrayBorder}>
                <ConnectedFolderList />
            </div>
            <div>
                <ConnectedFolderForm />
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