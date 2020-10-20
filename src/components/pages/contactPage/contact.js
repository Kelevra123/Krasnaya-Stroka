import React from 'react';
import Header from '../../header';
import './contact.css';
import imgLogoSmall from '../../images/KsLogoSmall.png';

const ContactPage = () => {
    return (
        <>
        <div className='logo-small'>
        </div>
        <Header/>
        <section className='media'>
        <div className='iphone'>
            <div className='iphone-svg'/>
            <div className='iphone-inner'/>
        </div>
        <div className='ipad'>
            <div className='ipad-svg'/>
            <div className='ipad-inner'/>
        </div>
        <div className='social_media'>
            <h1 className='subscribe'>Подписывайтесь на нас</h1>
            <a href='#' className='viber_icon'/>
            <a href='https://www.facebook.com/krstrokaodessa' className='facebook_icon'/>
            <a href='#' className='telegram_icon'/>
            <a href='#' className='instagram_icon'/>
        </div>
    </section>
    </>
    )
}
export default ContactPage;