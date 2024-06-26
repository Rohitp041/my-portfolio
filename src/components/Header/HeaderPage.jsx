import React  from "react";
import './Header.css';

/* React router */
import { NavLink } from 'react-router-dom';

/* DarkMode */
import DarkMode from '../DarkMode/DarkMode';
import rp from '../../img/rp.jpg';
/* Language */
import { FormattedMessage } from "react-intl";


const HeaderPage = () => {

    // Menu desplegable
    const menuDesplegable = () => {
        let navbar = document.querySelector('.navbar');
        navbar.classList.toggle("activar");

        window.onscroll = () => {
            if (window.scrollY > 0) {
                document.querySelector(".site-header").classList.add("activar")
            } else document.querySelector(".site-header").classList.remove("activar")

            navbar.classList.remove("activar")
        }
    }

    return (
        <header className="site-header">
            <div id="menu-btn" className="fas fa-bars" onClick={menuDesplegable}></div>
            <NavLink className="logo" to="/">
                <img className="logo" src={rp} alt="logo" />
            </NavLink>

            <nav className="navbar">
                <NavLink to="/" offset={-150} duration={500}>
                    <FormattedMessage
                        id='home'
                        defaultMessage='Home'
                    />
                </NavLink>
                <NavLink to="/about" offset={-150} duration={500}>
                    <FormattedMessage
                        id='about'
                        defaultMessage='About me'
                    />
                </NavLink>
                <NavLink to="/service" offset={-150} duration={500}>
                    <FormattedMessage
                        id='services'
                        defaultMessage='Services'
                    />
                </NavLink>
                <NavLink to="/experince" offset={-150} duration={500}>
                    <FormattedMessage
                        id='experince'
                        defaultMessage='Experience'
                    />
                </NavLink>
                <NavLink to="/contact" offset={-150} duration={500}>
                    <FormattedMessage
                        id='contact'
                        defaultMessage='Contact'
                    />
                </NavLink>
            </nav>
            <div className="switch" id="switch">
                <DarkMode />
            </div>
        </header>
    )
}

export default React.memo(HeaderPage);