/* eslint-disable react/prop-types */
import CCHCompeleteSvg from "../../../assets/CCHSvg/CCHCompeleteSvg";
import CCHUncompeleteSvg from "../../../assets/CCHSvg/CCHUncompleteSvg";
import classes from "./ChangeCheckedHelper.module.css"

const ChangeCheckedHelper = (props) => {
    const onClickToComplete = () => {
        props.handleChangeCheckOfTask(props.tasks.id, props.tasks, true)
    }
    const onClickToUncomplete= () => {
        
        props.handleChangeCheckOfTask(props.tasks.id, props.tasks, false)
    }
    return (
        <div>
            {props.tasks.checked &&
                <button onClick={onClickToUncomplete} className={classes.buttonWrapper}>
                    <CCHCompeleteSvg />
                </button>
            }
            {!props.tasks.checked &&
                <button onClick={onClickToComplete} className={classes.buttonWrapper}>
                    <CCHUncompeleteSvg />
                </button>
            }
        </div>
    )
}

export default ChangeCheckedHelper;