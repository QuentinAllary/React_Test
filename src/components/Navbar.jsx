import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          <img src="https://www.lacuisineduweb.com/wp-content/uploads/2019/09/audio-wizard-couleur-fond-transparent-1-ligne-1.png" id="navbar-logo" style={{ height: '50px' }} ></img>
        </a>
        <div className="btn-group ml-auto dropleft">
          <button className="btn btn-primary dropdown-toggle font-weight-bolder" type="button" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {/* <span className="navbar-toggler-icon"></span> */}
            <a>Mon compte</a>
          </button>
          <div className="dropdown-menu dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="dropdownMenu">
            <ul className="dropdown-list" id="navbarList">
              <li className="dropdown-submenu" id="navbarSubmenu">
                <a className="dropdown-item" href="/">Home</a>
                <a className="dropdown-item" href="#/gender">Gender</a>
                <a className="dropdown-item" href="#/info">info</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;