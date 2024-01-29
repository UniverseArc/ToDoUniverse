/* eslint-disable react/prop-types */
import { PureComponent } from "react";
import { connect } from "react-redux";
import FolderList from "./FolderList";
import { setFoldersThunkCreator } from "../../../store/folder/folderReducer";

class FolderListContainer extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchOnFolders();
    }

    render() {
        return (<FolderList folders={this.props.folders} />)
    }
}

const mapState = (state) => ({
    folders: state.folder.folders
})

const mapDispatch = () => ({
    fetchOnFolders: setFoldersThunkCreator
})

export const ConnectedFolderListContainer = connect(mapState, mapDispatch)(FolderListContainer)