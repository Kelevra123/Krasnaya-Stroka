import React, {useState} from 'react';
import './header.css';
import {Link} from 'react-router-dom';

const Header = () => {

    const [defaultDivClass, setDefaultClass] = useState('header__bottom_line');
    const [defaultButtonClass, setDefaultButtonClass] = useState('');

    const AddClass = (item) => {
        return setDefaultClass(item);
    };


    return (
        <header id="masthead" className="site-header">
                <div className='header__logo_bottom'/>


                <nav className='header'>
                    <Link to='/'  id='header__home' className={defaultButtonClass}>HOME</Link>
                    <div className='header__line__1'/>
                    <Link to='/galery/' 
                    onMouseEnter={() => AddClass('active_galery')} 
                    onMouseLeave={() => AddClass('galery_home')}
                    id='header__about' 
                    className={defaultButtonClass} >GALERY</Link>
                    <div className='header__line__2'/>
                    <a onMouseEnter={() => AddClass('active_prices')}
                    onMouseLeave={() => AddClass('prices_home')}
                    href="#" 
                    id='header__contact' 
                    className={defaultButtonClass}>PRICES</a>
                    <div className='header__line__3'/>
                    <Link to='/contacts' onMouseEnter={() => AddClass('active_contact')}
                    onMouseLeave={() => AddClass('contact_home')}
                    id='header__follow' 
                    className={defaultButtonClass}>CONTACT</Link>
                    <div className={defaultDivClass}></div>



                </nav>
        </header>
    )
}

export default Header;