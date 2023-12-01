import { PureComponent } from "react";
import FolderCard from "./FolderCard/FolderCard";

export class FolderList extends PureComponent {
    constructor(props){
        super(props);
    }

    getFolders = () => this.props.folders.map((folder) => <FolderCard {...folder} key={folder.id} />)

    render(){
        return (
            <ul>
                {this.getFolders()}
            </ul>
        )
    }
}