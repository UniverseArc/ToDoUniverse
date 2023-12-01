import { PureComponent } from "react";
import withFolderForm from "../FolderForm.consumer";

class FolderName extends PureComponent {
    constructor(props){
        super(props);
    }

    handleInputChange = (ev) => {
        const { value } = ev.target;
        this.props.changeName(value);
    }

    render(){
        return (
            <div>
                <label>Name</label>
                <input value={this.props.name} onChange={this.handleInputChange} />
            </div>
        )
    }
}

const ConnectedFolderName = withFolderForm(FolderName);

export default ConnectedFolderName;