import React from 'react';
import './header.css';
import img from '../images/KsLogo.png';

const Header = () => {
    return (
        <header id="masthead" className="site-header">
                <div className='header__logo_bottom'/>
                <div className='header__logo_bottom_black'>
                    <img className='logo_text' src={img}/>
                    </div>

                <nav className='header'>
                    <a href="#"  id='header__home' className="hvr-grow">HOME</a>
                    <div className='header__line__1'/>
                    <a href="#" id='header__about' >GALERY</a>
                    <div className='header__line__2'/>
                    <a href="#" id='header__contact'>PRICES</a>
                    <div className='header__line__3'/>
                    <a href="#" id='header__follow'>CONTACT</a>
                    <div className='header__bottom_line'></div>



                </nav>
                <div className='combinated-red'/>
        </header>
    )
}

export default Header;