/* eslint-disable react/prop-types */
import FolderSvg from "../Folder/FolderSvg/FolderSvg"
import ChangeCheckedHelper from "./ChangeCheckedHelper/ChangeCheckedHelper"
import classes from "./MainPage.module.css"
import PopupMain from "./Popup/PopupMain"


const MainPage = (props) => {
    let arrayOfTasks = props.currentFolder.map(tasks => {
        console.log(tasks);
        debugger
        return (
            <div key={tasks.id} className={classes.taskWrapper}>
                <ChangeCheckedHelper tasks={tasks} handleChangeCheckOfTask={props.handleChangeCheckOfTask}/>{tasks.value}
            </div>
        )
    })
    return (
        <div className={classes.MainPageWrapper}>
            {props.currentFolder.length === 0 ?
                <div>
                    Задачи не добавлены.
                </div>
                : arrayOfTasks
            }
            <div className={classes.MainPageAddTaskWrapper}>
                <div>
                    <FolderSvg /> <button className={classes.MainPageAddNewTask} onClick={props.popupToggler}>Добавить задачу</button>
                    <PopupMain
                        handleDTOInputValue={props.handleDTOInputValue}
                        handleChangeInput={props.handleChangeInput}

                        addTaskCallBack={props.addTaskCallBack}
                        stateOfToggle={props.stateOfToggle}
                        popupToggler={props.popupToggler} />
                </div>
            </div>
        </div>
    )
}

export default MainPage