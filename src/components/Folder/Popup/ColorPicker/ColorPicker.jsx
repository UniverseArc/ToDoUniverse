/* eslint-disable react/prop-types */
import classes from "./ColorPicker.module.css"
const ColorPicker = (props) => {
    const colors = [
        {
            id: 1,
            color: "#" + "C9D1D3",
        },
        {
            id: 2,
            color: "#" + "42B883",
        },
        {
            id: 3,
            color: "#" + "64C4ED",
        },
        {
            id: 4,
            color: "#" + "FBC",
        },
        {
            id: 5,
            color: "#" + "B6E6BD",
        },
        {
            id: 6,
            color: "#" + "C9D1D3",
        },
        {
            id: 7,
            color: "#" + "C355F5",
        },
        {
            id: 8,
            color: "#" + "09011A",
        },
        {
            id: 9,
            color: "#" + "FF6464",
        },
    ];
    const colorPicker = (color) => {
        props.handleColorPick(color)
    }
    const arrayOfColors = colors.map((color) => {
        return <div
            key={color.id}
            style={{ backgroundColor: color.color }}
            className={classes.popupColorsPick_Border}
            onClick={() => colorPicker(color.color)} />
    })
    return (
        <div className={classes.popupColorsPick}>
            {arrayOfColors}
        </div>
    )
}

export default ColorPicker