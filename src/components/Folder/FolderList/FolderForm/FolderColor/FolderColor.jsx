import { PureComponent } from "react";
import classes from "./FolderColor.module.css"
import withFolderFormConsumer from "../FolderFormConsumer";
const colors = [
    {
        color: "#" + "42B883",
    },
    {
        color: "#" + "64C4ED",
    },
    {
        color: "#" + "FBC",
    },
    {
        color: "#" + "B6E6BD",
    },
    {
        color: "#" + "C9D1D3",
    },
    {
        color: "#" + "C355F5",
    },
    {
        color: "#" + "09011A",
    },
    {
        color: "#" + "FF6464",
    },
];
class FolderColor extends PureComponent{
    constructor(props){
        super(props)
    }

    sendColor = (color) => {
        console.log(color);
        this.props.changeColor(color)
    }


    getColor = () => colors.map(color => {
        const isActive = color.color === this.props.color;
        const classNamed = `${classes.popupColorsPick_Border} ${isActive ? classes.active : ""}`
        return(
            <li role="button" key={color.color} className={classNamed} style={{ backgroundColor: color.color }} onClick={() => {this.sendColor(color.color)}}> </li>
        )
    })

    render(){
        return(
            <ul className={classes.popupColorsPick}>
                {this.getColor()}
            </ul>
        )
    }
}

const HockedFolderColor = withFolderFormConsumer(FolderColor)

export default HockedFolderColor;