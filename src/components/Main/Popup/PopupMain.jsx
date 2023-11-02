/* eslint-disable react/prop-types */
import clsx from "clsx";
import classes from "./PopupMain.module.css"
const PopupMain = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTaskCallBack();
    }
    return (
        <form className={clsx(classes.popupWrapper, props.stateOfToggle === true ? classes.popupWrapperOnOpen : classes.popupWrapperOnClose)}
        onSubmit={handleSubmit}>
            <div className={classes.popupContent}>
                <div className={classes.popupContentInputWrapper}>
                    <input
                        value={props.handleDTOInputValue}
                        onChange={props.handleChangeInput}
                        className={classes.popupInput}
                        placeholder="Название задачи" />
                </div>
                <div className={classes.popupContentButtons}>
                    <button type="submit" className={classes.popupButtonAccept}>Добавить</button>
                    <button type="button" onClick={props.popupToggler} className={classes.popupButtonReject}>Отмена</button>
                </div>
            </div>
        </form>
    )
}

export default PopupMain;
