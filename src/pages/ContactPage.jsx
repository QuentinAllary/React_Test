import React, { Component } from "react";
import { UserContext, withUser } from '../store/UserProvider'
import { GenderContext } from '../store/GenderProvider.jsx'

class Information extends Component {
    render() {
        return (
            <UserContext.Consumer>{(UserContext) => (
                <GenderContext.Consumer>{(GenderContext) => {
                    const { isMale } = GenderContext;
                    const { name } = UserContext;
                    return (
                        <div id="containerInfo">
                            <h4 id="headerContact">Mes informations</h4>
                            <p> Bonjour, {isMale ? 'Monsieur' : 'Madame'} {name} </p>
                        </div>
                    )
                }}</GenderContext.Consumer>
            )}</UserContext.Consumer>
        );
    }
}

export default Information