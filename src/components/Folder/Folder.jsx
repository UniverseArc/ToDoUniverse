/* eslint-disable react/prop-types */

import Popup from "./Popup/Popup"
import classes from "./Folder.module.css"
import FolderCard from "./FolderCard/FolderCard"
import FolderSvg from "./FolderSvg/FolderSvg"
const Folder = (props) => {
    let arrayOfFolders = props.folders.map(folder => {
        return <FolderCard key={folder.id} {...folder} />
    })
    return (
        <ul className={classes.folderBorder}>
            <div className={classes.arrayBorder}>
                {arrayOfFolders}
            </div>
            <div className={classes.AddFolderWrapper}>
                <FolderSvg /> <button className={classes.addFolderButton} onClick={props.popupToggler}>Добавить папку</button>
                
                <Popup 
                handleDTOInputValue = {props.handleDTOInputValue}
                handleChangeInput = {props.handleChangeInput} 
                handleColorPick = {props.handleColorPick}
                handleDTOColorValue = {props.handleDTOColorValue}

                onCreateNewFolder={props.onCreateNewFolder} 
                stateOfToggle={props.stateOfToggle} 
                popupToggler={props.popupToggler} />
            </div>
        </ul>
    )
}

export default Folder;