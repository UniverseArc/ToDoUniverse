import { PureComponent } from "react";

import s from './FolderColor.module.css';
import withFolderForm from "../FolderForm.consumer";

const colors = [
    {
        color: "#42B883",
    },
    {
        color: "#64C4ED",
    },
    {
        color: "#FBC",
    },
    {
        color: "#B6E6BD",
    },
    {
        color: "#C9D1D3",
    },
    {
        color: "#C355F5",
    },
    {
        color: "#09011A",
    },
    {
        color: "#FF6464",
    },
];

class FolderColor extends PureComponent {
    constructor(props){
        super(props);
    }

    handleSelectColor = (color) => {
        this.props.changeColor(color);
    }

    getColors = () => colors.map(color => {
        const isActive = color.color === this.props.color;
        const className = `${s.colorItem} ${isActive ? s.active : ''}`
        return (
            <li 
                role="button"
                tabIndex={0}
                key={color.color}
                className={className}
                style={{ '--background': color.color }}
                onClick={() => this.handleSelectColor(color.color)}
            />
        )
    })

    render(){
        return(
            <ul className={s.wrapper}>
                {this.getColors()}
            </ul>
        )
    }
}

const ConnectedFolderColor = withFolderForm(FolderColor);

export default ConnectedFolderColor;