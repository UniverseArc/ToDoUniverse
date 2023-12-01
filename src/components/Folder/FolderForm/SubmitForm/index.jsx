import { PureComponent, memo } from "react";

class SubmitForm extends PureComponent {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <button type="submit">Принять</button>
        )
    }
}

const MemoizedSubmitForm = memo(SubmitForm);

export default MemoizedSubmitForm;