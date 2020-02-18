import React, {createContext, Component} from 'react';

export const GenderContext = createContext();

class GenderContextProvider extends Component {
    state = {
        isMale: false,
    }
    
    toggleGender = () => {
        this.setState({ isMale: !this.state.isMale });
    }

    render() {
        return (
            <GenderContext.Provider value={{...this.state , toggleGender: this.toggleGender}}>
                {this.props.children}
            </GenderContext.Provider>
        )
    }
}

export default GenderContextProvider;