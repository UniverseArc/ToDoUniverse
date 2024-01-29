import { PureComponent } from "react";
import withFolderFormConsumer from "./FolderFormConsumer";
import HockedFolderName from "./FolderName/FolderName";
import HockedFolderColor from "./FolderColor/FolderColor";
import FolderSubmit from "./FolderSubmit/FolderSubmit";

class FolderForm extends PureComponent {
    constructor(props) {
        super(props)
    }

    handleSubmit = (e) => {
        console.log(this);
        e.preventDefault()
        this.props.onSendFolders(this.props.name, this.props.color)
        this.props.changeName('')
        this.props.changeColor('')
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <HockedFolderName />
                <HockedFolderColor />
                <FolderSubmit />
            </form>
        )
    }
}

const HockedFolderForm = withFolderFormConsumer(FolderForm)

export default HockedFolderForm;