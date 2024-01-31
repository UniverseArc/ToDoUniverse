import { PureComponent } from "react";
import FolderCard from "./FolderCard/FolderCard";

class FolderList extends PureComponent {
    constructor(props){
        super(props)
    }
    
    getFolders = () => this.props.folders.map(folder => <FolderCard key={folder.id} {...folder} />)

    render(){
        return(
            <ul>
                {this.getFolders()}
            </ul>
        )
    }
}

export default FolderList;