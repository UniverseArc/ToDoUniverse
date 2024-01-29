import { PureComponent } from "react";

class FolderSubmit extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button type="submit" style={{color: "black"}}>Отправить</button>
        )
    }
}

export default FolderSubmit;