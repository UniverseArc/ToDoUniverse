/* eslint-disable react/prop-types */
import React from "react";

class TestOnDoubleClickChange extends React.Component {
    state = {
        editMode: false,
        value: this.props.tasks.value,
    }
    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactiveEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.handleChangeValueOfTask(this.props.tasks.id, this.props.tasks, this.state.value)
    }
    onChangeUpdateValue= (e) => {
        this.setState({
            value: e.currentTarget.value
        })
    }
    render() {
        return (
            <div>
                {this.state.editMode === false &&
                    <span onDoubleClick={this.activeEditMode}>{this.state.value}
                    <button onClick={this.activeEditMode}>11</button>
                    </span>
                }
                {this.state.editMode === true &&
                    <input onChange={this.onChangeUpdateValue} autoFocus={true} onBlur={this.deactiveEditMode} type="text" value={this.state.value} />
                }
            </div>
        )
    }
}

export default TestOnDoubleClickChange