import { PureComponent } from "react";

import { postFolderThunkCreator } from "../../../store/folder/folderReducer";
import { connect } from "react-redux";
import FolderFormProvider from "./FolderForm.proivder";
import ConnectedFolderForm from "./FolderForm";

const mapState = undefined;

const mapDispatch = {
    createFolder: postFolderThunkCreator,
};

class FolderFormContainer extends PureComponent {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <FolderFormProvider>
                <ConnectedFolderForm createFolder={this.props.createFolder} />
            </FolderFormProvider>
        )
    }
}

const ConnectedFolderFormContainer = connect(mapState, mapDispatch)(FolderFormContainer);

export default ConnectedFolderFormContainer;

