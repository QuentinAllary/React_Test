import React, { Component } from 'react';

const SideNavbar = () => {
    return (
        <div class="wrapper">
            <nav id="sidebar">
                <ul class="list-unstyled components">
                    <li class="active" id= "activeList">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#/gender">Gender</a>
                        </li>
                        <li>
                            <a href="#/info">Info</a>
                        </li>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default SideNavbar;