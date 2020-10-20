import React from 'react';
import './marketing.css'
import {Link} from 'react-router-dom';

const Marketing = () => {

    
    return (
      
      <section className='section__marketing'>

        <div className="row">
            <div className="col-lg-4">
              <svg width="10em" height="10em" viewBox="0 0 16 16" className="bi bi-calendar-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
              <path fillRule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
              </svg>
              <h2>Ежедневно</h2>
              <p>Мы работаем  без выходных<br/> с 10:00 до 22:00.<br/> Наши телефоны доступны влоть до 00:00. <br/>Мы всегда рады вашему звонку или визиту.</p>
              <p><Link to='/contacts' className="btn btn-secondary" role="button">Подробнее &raquo;</Link></p>
            </div>
            <div className="col-lg-4">
              <svg width="10em" height="10em" viewBox="0 0 16 16" className="bi bi-cash-stack" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 3H1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1h-1z"/>
              <path fillRule="evenodd" d="M15 5H1v8h14V5zM1 4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H1z"/>
              <path d="M13 5a2 2 0 0 0 2 2V5h-2zM3 5a2 2 0 0 1-2 2V5h2zm10 8a2 2 0 0 1 2-2v2h-2zM3 13a2 2 0 0 0-2-2v2h2zm7-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
              </svg>
              <h2>Приятные цены</h2>
              <p>Мы предоставляем возможность <br/>выбрать один из четырех залов,<br/> который идеально подойдет<br/> под формат вашего мероприятия.</p>
              <p><Link to='/galery/gostinna/' className="btn btn-secondary" role="button">Подробнее &raquo;</Link></p>
            </div>
            <div className="col-lg-4">
              <svg width="10em" height="10em" viewBox="0 0 16 16" className="bi bi-plug" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M6 0a.5.5 0 0 1 .5.5V3h3V.5a.5.5 0 0 1 1 0V3h1a.5.5 0 0 1 .5.5v3A3.5 3.5 0 0 1 8.5 10c-.002.434-.01.845-.04 1.22-.041.514-.126 1.003-.317 1.424a2.083 2.083 0 0 1-.97 1.028C6.725 13.9 6.169 14 5.5 14c-.998 0-1.61.33-1.974.718A1.922 1.922 0 0 0 3 16H2c0-.616.232-1.367.797-1.968C3.374 13.42 4.261 13 5.5 13c.581 0 .962-.088 1.218-.219.241-.123.4-.3.514-.55.121-.266.193-.621.23-1.09.027-.34.035-.718.037-1.141A3.5 3.5 0 0 1 4 6.5v-3a.5.5 0 0 1 .5-.5h1V.5A.5.5 0 0 1 6 0zM5 4v2.5A2.5 2.5 0 0 0 7.5 9h1A2.5 2.5 0 0 0 11 6.5V4H5z"/>
              </svg>
              <h2>У нас есть все</h2>
              <p>У нас достаточно техники для <br/>проведения мероприятия любой сложности.<br/> Все что вам понадобится - ваш ноутбук.<br/> Остальное мы с радостью предоставим</p>
              <p><Link to='/galery/' className="btn btn-secondary" role="button">Подробнее &raquo;</Link></p>
            </div>
        </div>
    </section>
    )
}



export default Marketing;