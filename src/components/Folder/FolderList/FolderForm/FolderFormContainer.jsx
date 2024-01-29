import { PureComponent } from "react";
import { connect } from "react-redux";
import FolderFormProvider from "./FolderFormProvider";
import HockedFolderForm from "./FolderForm";
import { postFolderThunkCreator } from "../../../../store/folder/folderReducer";

class FolderFormContainer extends PureComponent {
    constructor(props) {
        super(props)
    }

    onSendFolders = (name, color) => {
        console.log(name, color);
        this.props.sendFolder(name, color)
    }

    render() {
        return (
            // TO-DO: Не очень понял как это рабоает.
            <FolderFormProvider>
                <HockedFolderForm onSendFolders={this.onSendFolders} />
            </FolderFormProvider>
        )
    }
}

const mapState = undefined;
const mapDispatch = {
    sendFolder: postFolderThunkCreator
}

export const ConnectedFolderFormContainer = connect(mapState, mapDispatch)(FolderFormContainer) 