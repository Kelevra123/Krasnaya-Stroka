import React from 'react';
import Header from '../header';
import Slider from '../slider';
import Marketing from '../marketing';
import Prices from '../prices/prices.js';
import './mainPageCopy.css';
import Logo from '../logo/logo';
import Footer from '../footer/footer'


const MainPage = () => {
    return (
        <div id='site'
        className='page'>
            <Header/>
            <Logo/>
            <Slider/>
            <Marketing/>
            <Prices/>
            <Footer/>
        </div>
    )
}

export default MainPage;