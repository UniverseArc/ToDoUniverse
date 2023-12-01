import { PureComponent } from "react";
import { connect } from "react-redux";
import { FolderList } from "./FolderList";

import { setFoldersThunkCreator } from "../../../store/folder/folderReducer";

const mapStateToProps = (state) => ({
    folders: state.folder.folders
});

const mapDispatch = {
    fetchFolders: setFoldersThunkCreator,
}

class FolderListContainer extends PureComponent {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchFolders();
    }

    render(){
        return <FolderList folders={this.props.folders} />
    }
}

const ConnectedFolderList = connect(mapStateToProps, mapDispatch)(FolderListContainer);

export default ConnectedFolderList;