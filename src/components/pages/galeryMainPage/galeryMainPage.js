import React from 'react';
import './galeryMainPage.css';
import {Link} from 'react-router-dom';

const GaleryMainPage = () => {
    return (
        <div className='galery_inside'>
        <Link to='/' className='galery_logo'/>
        <div className='galery_main_line'/>
        <h1 className='galery_slogan'>Лучшее вложение - вложение в себя</h1>
        <Link to='/galery/gostinna/' className='galery_first_child'>
            <div className='first_child_image'></div>
            <h1 className='first_child_text'>Гостинная Отношений</h1>
        </Link>
        <div className='galery_second_child'>
            <div className='second_child_image'></div>
            <h1 className='second_child_text' >Бюро Успеха</h1>
        </div>
        <div className='galery_third_child'>
            <div className='third_child_image'></div>
            <h1 className='third_child_text'>Мастерская души</h1>
        </div>
        <div className='galery_four_child'>
            <div className='four_child_image'></div>
            <h1 className='four_child_text'>Переговорная</h1>
        </div>
    </div>
    )
}
export default GaleryMainPage;