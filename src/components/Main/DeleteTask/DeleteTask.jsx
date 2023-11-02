/* eslint-disable react/prop-types */
import classes from "./DeleteTask.module.css"
import DeleteCrossSvg from "../../../assets/DeleteCrossSvg"
const DeleteTask = (props) => {
    const handleDeleteTask = () => {
        
        props.deleteTaskCallBack(props.tasksId)
    }
    return (
        <button onClick={handleDeleteTask} className={classes.crossDeleteWrapper}>
            <DeleteCrossSvg />
        </button>
    )
}

export default DeleteTask