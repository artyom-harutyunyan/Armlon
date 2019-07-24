import React from 'react';
import './Navbar.sass';
// import {Link} from "react-router-dom";
import logo from '../../Img/Logo.png';

export default class Nav extends React.Component {
    render() {
        return (
            <div className="Navbar">
               <div className="Navbar_logo">
                   <img src={logo} className="Navbar_logo_item" />
               </div>
               <nav className="Navbar_navigation">
                    <ul>
                        <li><a href="/" className="menu_links" id="company">Company</a></li>
                        <li><a href="/" className="menu_links">Services</a></li>
                        <li><a href="/" className="menu_links">Industries</a></li>
                        <li><a href="/" className="menu_links">Projects</a></li>
                        <li><a href="/" className="menu_links">Contact</a></li>
                    </ul>
               </nav>
            </div>
        );
    }
}
