/* eslint-disable react/prop-types */
import DeleteCrossSvg from "../../assets/DeleteCrossSvg"
import FolderSvg from "../../assets/FolderSvg"
import ChangeCheckedHelper from "./ChangeCheckedHelper/ChangeCheckedHelper"
import ChangeTitleOfPage from "./ChangeTitleOfPage/ChangeTitleOfPage"
import DeleteTask from "./DeleteTask/DeleteTask"
import classes from "./MainPage.module.css"
import PopupMain from "./Popup/PopupMain"
import TestOnDoubleClickChange from "./TestOnDoubleClickChange/TestOnDoubleClickChange"


const MainPage = (props) => {
    let arrayOfTasks = props.currentFolder.map(tasks => {
        return (
            <div key={tasks.id} className={classes.taskWrapper}>
                <ChangeCheckedHelper tasks={tasks} handleChangeCheckOfTask={props.handleChangeCheckOfTask} />
                <TestOnDoubleClickChange handleChangeValueOfTask={props.handleChangeValueOfTask} tasks={tasks} />
                <DeleteTask tasksId={tasks.id} deleteTaskCallBack={props.deleteTaskCallBack} />
            </div>
        )
    })
    return (
        <div className={classes.MainPageWrapper}>
            {props.currentFolder.length === 0 ?
                <div>
                    Задачи не добавлены.
                </div>
                : 
                <div className={classes.MainPageTasks}>
                    <div style={{ color: props.colorOfTitle }} className={classes.MainPageTitle}>
                        <ChangeTitleOfPage 
                        currentFolder={props.currentFolder} 
                        handleChangeNameOfFolder={props.handleChangeNameOfFolder} 
                        colorOfTitle={props.colorOfTitle}
                        nameOfTitle={props.nameOfTitle}/>
                        <button onClick={props.deleteFolderCallBack} className={classes.MainPageTitleButton}>
                            <DeleteCrossSvg />
                        </button>
                    </div>
                    {arrayOfTasks}
                </div>
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