import { PureComponent } from "react";
import ConnectedFolderName from "./FolderName/FolderName";
import ConnectedFolderColor from "./FolderColor/FolderColor";
import withFolderForm from "./FolderForm.consumer";
import SubmitForm from "./SubmitForm";

class FolderForm extends PureComponent {
    constructor(props){
        super(props);
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.createFolder(this.props.name, this.props.color);
        this.props.changeName('');
        this.props.changeColor('');
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <ConnectedFolderName />
                <ConnectedFolderColor />
                <SubmitForm />
            </form>
        )
    }
}

const ConnectedFolderForm = withFolderForm(FolderForm);

export default ConnectedFolderForm;