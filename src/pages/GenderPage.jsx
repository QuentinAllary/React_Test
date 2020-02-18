import React, { Component, context } from "react";
import { GenderContext } from '../store/GenderProvider.jsx'

class Gender extends Component {
    render() {
        return (
            <GenderContext.Consumer>{(GenderContext) => {
                console.log(context);
                const { toggleGender } = GenderContext;
                return (
                    <div className="container" id="containerGender">
                        <h4 className="center" id="genre">Genre</h4>
                        <p id="textGender">Peux-tu indiquer ton sexe ?</p>
                        <button id="btnMonsieur" onClick={toggleGender}>Monsieur</button>
                        <button id="btnMadame" onClick={toggleGender}>Madame</button>
                    </div>
                )
            }}</GenderContext.Consumer>
        );
    }
}

export default Gender