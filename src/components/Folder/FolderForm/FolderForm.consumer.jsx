import FolderFormContext from "./FolderForm.context"

const withFolderForm = (Component) => {
    function ConnectedForm(props){
       return(
            <FolderFormContext.Consumer>
                {context => <Component {...props} {...context} />}
            </FolderFormContext.Consumer>
        )
    }

    ConnectedForm.displayName = `ConnectedForm(${Component.displayName})`;

    return ConnectedForm;
}

export default withFolderForm;