import React, { Component, context } from "react";
import { UserContext } from '../store/UserProvider'

class Home extends Component {
    render() {
        return (
            <UserContext.Consumer>{(UserContext) => {
                console.log(context);
                const { name, setName } = UserContext;
                return (
                    <div className="container" id="containerHome">
                        <h4 id="headerHome">Bonjour {name} !</h4>
                        <a id="textHome">Entrez votre nom en dessous</a>
                        <input id="inputHome" type="text" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                )
            }}</UserContext.Consumer>
        );
    }
}

export default Home;