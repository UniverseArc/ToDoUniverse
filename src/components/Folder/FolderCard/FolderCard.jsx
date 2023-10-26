import { Link } from "react-router-dom";
import classes from "./FolderCard.module.css"
import { getAllTasksThunkCreator } from "../../../store/tasks/tasksReducer";
const FolderCard = (folder) => {
    const changeMainPage = () => {
        getAllTasksThunkCreator(`${folder.id}`)
    }
    return (
        <li className={classes.singleFolderWrapper} onClick={changeMainPage}>
            <div style={{ backgroundColor: folder.color }}
                className={classes.folderCircle} />
            <Link to={"folder/" + folder.id}>{folder.name}</Link>
        </li>
    )
}

export default FolderCard;