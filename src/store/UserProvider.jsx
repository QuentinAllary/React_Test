import React, {createContext, Component} from 'react';

export const UserContext = createContext({
    name: "",
    setName: () => {}
});

class UserContextProvider extends Component {
    state = {
        name: "inconnu",
        setName: name => this.setState({ name: name})
    }
    
    render() {
        return (
            <UserContext.Provider value={{...this.state }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default UserContextProvider;