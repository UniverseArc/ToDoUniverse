import FolderFormContext from "./FolderFormContext"

const withFolderFormConsumer = (Component) => {
    // TO-DO: без displayname и function обычной всё ломается. Спросить, как это всё тут работает?
    function ConnectedForm(props) {
        return (
            <FolderFormContext.Consumer>
                {context => <Component {...props} {...context} />}
            </FolderFormContext.Consumer>
        )
    }

    ConnectedForm.displayName = `ConnectedForm(${Component.displayName})`;

    return ConnectedForm;
}

export default withFolderFormConsumer;