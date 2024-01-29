import { PureComponent } from "react";
import withFolderFormConsumer from "../FolderFormConsumer";

class FolderName extends PureComponent {
    constructor(props) {
        super(props)
    }

    handleChangeInput = (e) => {
        this.props.changeName(e.target.value)
    }

    render() {
        return (
            <div>
                <label>InputFolder</label>
                <input value={this.props.name} onChange={this.handleChangeInput}/>
            </div>
        )
    }
}

const HockedFolderName = withFolderFormConsumer(FolderName);

export default HockedFolderName;