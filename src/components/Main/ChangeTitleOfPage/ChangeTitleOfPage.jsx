/* eslint-disable react/prop-types */
import React from "react";

class ChangeTitleOfPage extends React.Component {
    state = {
        editMode: false,
        value: this.props.nameOfTitle,
        color: this.props.colorOfTitle,
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
        
        this.props.handleChangeNameOfFolder(this.props.currentFolder[0].folderId, this.state.value, this.state.color)
    }
    onChangeUpdateValue = (e) => {
        this.setState({
            value: e.currentTarget.value
        })
    }
    componentDidUpdate(prevState) {
        
        if (prevState.nameOfTitle !== this.props.nameOfTitle) {
            this.setState({
                value: this.props.nameOfTitle,
                color: this.props.colorOfTitle,
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.editMode === false &&
                    <span onDoubleClick={this.activeEditMode}>
                        {this.state.value}
                    </span>
                }
                {this.state.editMode === true &&
                    <input onChange={this.onChangeUpdateValue} autoFocus={true} onBlur={this.deactiveEditMode} type="text" value={this.state.value} />
                }
            </div>
        )
    }
}

export default ChangeTitleOfPage