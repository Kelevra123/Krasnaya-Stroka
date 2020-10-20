import React from 'react';
import MainPage from '../pages';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ContactPage from '../pages/contactPage';
import GaleryPageSlider from '../pages/galeryPage/galeryPage';
import GaleryMainPage from '../pages/galeryMainPage/galeryMainPage';

const App = () => {
    return (
        <Router>
            <div className="app">
            <Route path='/' exact component={MainPage}/>
            <Route path='/contacts' exact component={ContactPage}/>
            <Route path='/galery' exact component={GaleryMainPage}/>
            <Route path='/galery/gostinna' exact component={GaleryPageSlider}/>
            </div>
        </Router>
        
    )
}

export default App;