import { Link } from "react-router-dom";
import classes from "./FolderCard.module.css"
import { getAllTasksThunkCreator } from "../../../../store/tasks/tasksReducer";
const FolderCard = (folder) => {
    const changeMainPage = () => {
        getAllTasksThunkCreator(`${folder.id}`)
    }
    return (
        <li className={classes.singleFolderWrapper} onClick={changeMainPage}>
            <Link to={"folder/" + folder.id}>
                <div style={{ backgroundColor: folder.color }}
                    className={classes.folderCircle} />{folder.name}</Link>
        </li>
    )
}

export default FolderCard;