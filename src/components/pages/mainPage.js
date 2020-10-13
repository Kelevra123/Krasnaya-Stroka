import React from 'react';
import Header from '../header';
import Slider from '../slider';
import Marketing from '../marketing';
import Prices from '../prices/prices.js';
import './mainPageCopy.css';
import Perehod from '../perehod/perehod';


const MainPage = () => {
    return (
        <div id='site'
        className='page'>
            <Header/>
            <Slider/>
            <Marketing/>
            <Prices/>
            <Perehod/>
        </div>
    )
}

export default MainPage;