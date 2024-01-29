import { PureComponent } from "react";
import FolderFormContext from "./FolderFormContext";

class FolderFormProvider extends PureComponent{
    constructor(props){
        super(props)
        this.state = {name: "", color: ""}
    }

    onChangeName = (name) => {
        this.setState({ name })
    }

    onChangeColor = (color) => {
        const nextColor = this.state.color === color ? "" : color;
        this.setState({color: nextColor})
    }
    
    getValue = () => ({
        name: this.state.name,
        color: this.state.color,
        changeName: this.onChangeName,
        changeColor: this.onChangeColor
    })
    render(){
        return(
            <FolderFormContext.Provider value={this.getValue()}>
                {this.props.children}
            </FolderFormContext.Provider>
        )
    }
}

export default FolderFormProvider;

