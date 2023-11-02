/* eslint-disable react/prop-types */
import clsx from "clsx";
import ColorPicker from "./ColorPicker/ColorPicker";
import classes from "./Popup.module.css"
import PopupCloseSvg from "../../../assets/PopupCloseSvg";
const Popup = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onCreateNewFolder();
    }
    return (
        <form className={clsx(classes.popupWrapper, props.stateOfToggle === true ? classes.popupWrapperOnOpen : classes.popupWrapperOnClose)}
        onSubmit={handleSubmit}>
            <div className={classes.popupContent}>
                <div>
                    <input
                        value={props.handleDTOInputValue}
                        onChange={props.handleChangeInput}
                        className={classes.popupInput}
                        placeholder="Название папки" />
                </div>
                <div>
                    <ColorPicker handleColorPick={props.handleColorPick} />
                </div>
                <div>
                    <button type="submit" className={classes.popupButton}>Добавить</button>
                </div>
                <div onClick={props.popupToggler} className={classes.popupCloseSvg}>
                    <PopupCloseSvg />
                </div>
            </div>
        </form>
    )
}

export default Popup;
