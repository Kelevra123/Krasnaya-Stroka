import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <section className='footer_section'>
            <p className='footer_contacts'>krasnayastroka_odessa Facebook:www.facebook.com/krstrokaodessa <br/>Тел: 099-975-56-67<br/> 066-009-18-07<br/> 097-001-77-33<br/> 073-001-77-33</p>
            <div className='footer_media'>
                    <h1 className='footer_subscribe'>Подписывайтесь на нас</h1>
                    <a href='#' className='footer_viber_icon'> </a>
                    <a href='https://www.facebook.com/krstrokaodessa' className='footer_facebook_icon'> </a>
                    <a href='https://web.telegram.org/#/im?p=@krasnayastroka' className='footer_telegram_icon'> </a>
                    <a href='https://www.instagram.com/krasnayastroka_odessa/' className='footer_instagram_icon'> </a>
            </div>
            <iframe className="footer_maps" title='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2312.351817468074!2d30.762450846197204!3d46.431550674876284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6338a35632123%3A0x7dc23f606582a871!2z0KbQtdC90YLRgCDRgNCw0LfQstC40YLQuNGPINC4INC_0LXRgNC10LzQtdC9ICLQmtGA0LDRgdC90LDRjyDQodGC0YDQvtC60LAi!5e0!3m2!1sru!2sua!4v1602847940815!5m2!1sru!2sua" width="300" height="150" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        </section>
    )
}

export default Footer;