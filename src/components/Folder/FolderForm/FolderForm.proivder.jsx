import { PureComponent } from "react";
import FolderFormContext from "./FolderForm.context";

class FolderFormProvider extends PureComponent {
    constructor(props){
        super(props);
        this.state = { name: '', color: '' };
    }

    changeName = (name) => {
        this.setState({ name });
    }

    changeColor = (color) => {
        const nextColor = this.state.color === color ? "" : color;
        this.setState({ color: nextColor });
    }

    getValue = () => ({
        name: this.state.name,
        color: this.state.color,
        changeName: this.changeName,
        changeColor: this.changeColor,
    });

    render(){
        return(
            <FolderFormContext.Provider value={this.getValue()}>
                {this.props.children}
            </FolderFormContext.Provider>
        )
    }
}

export default FolderFormProvider;