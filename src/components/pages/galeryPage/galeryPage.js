import React, {useState} from 'react';
import './galeryPage.css';
import {Link} from 'react-router-dom';
import GalerySlider from './galerySlider';
import GaleryAbout from './galeryAbout';
import GaleryContacts from './galeryContacts';


const GaleryPageSlider = () => {

    const [active, setActive] = useState('Slider');

    const ActiveView = () => {
        if (active === 'Slider') {
            return <GalerySlider Pole={Pole}/>
        }
        if (active === 'About') {
            return <GaleryAbout Pole={Pole}/>
        }
        if (active === 'Contacts') {
            return <GaleryContacts Pole={Pole}/>
        }
    }

    const Pole = (
        <>
        <Link to='/' className='galery_logo'/>
        <Link to='/galery/' className='galery_back_block'>
        <h1 className='back_block_text'>Galery</h1>
        </Link>
        <div className='galery_main_line'/>
        <h1 className='galery_slogan'>Лучшее вложение - вложение в себя</h1>
        <h1 onClick={() => setActive('Slider')} className='galery_galery_button'>Фото
        </h1>
        <h1 onClick={() => setActive('About')} className='galery_about_button'>О зале</h1>
        <h1 onClick={() => setActive('Contacts')} className="galery_contacts_button">Контакты</h1>
        </>
    )


    return (
        <>
                <ActiveView/>
        </>
    )
}
export default GaleryPageSlider;