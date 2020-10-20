import React from 'react';
import img from '../images/KsLogo.png'

const Logo = () => {
    return (
        <>
        <div className='header__logo_bottom_black'>
        <img className='logo_text' src={img} alt='logo'/>
        </div>
    <div className='combinated-red'/>
    </>
    )
}
export default Logo;