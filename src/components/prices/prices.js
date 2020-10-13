import React, {useState} from 'react';
import './prices.css';
import styled, {keyframes} from 'styled-components';
import {fadeIn} from 'react-animations';
import img2 from '../images/prices1.jpg';
import img1 from '../images/prices2.jpg';
import img3 from '../images/prices3.jpg';


const prices1 = {
  backgroundImage: `url(${img1})`,
  backgroundSize: '100%'
};
const prices2 = {
  backgroundImage: `url(${img2})`,
  backgroundSize: '100%'
};
const prices3 = {
  backgroundImage: `url(${img3})`,
  backgroundSize: '100%'
}
const hidden = {
  backgroundColor: 'red'
}
const StyledDiv = styled.div`
animation: 2s ${keyframes`${fadeIn}`};
 background-color: red;`
const buttonStyle = {
  position: 'relative',
  top: '69%',
  borderColor: 'black'
}


const Prices = () => {

  const [cards, setCards] = useState([
    {name: 'Бюро Успеха', price: '250 ГРН', style: prices1, visible: true},
    {name: 'Гостинная Отношений', price: '200 ГРН', style: prices2, visible: true},
    {name: 'Переговорная', price: '150 грн' , style: prices2, visible: true},
    {name: 'Мастерская души', price: '230 ГРН', style: prices3, visible: true}
  ])

  const pricesShow = (item, e) => {
    const index = cards.findIndex(card => card.name === item);
    const newItem = {...cards[index], visible: false};
    const newArray = [
      ...cards.slice(0, index),
      newItem,
      ...cards.slice(index + 1)
    ]
    return setCards(newArray);
    }

    const pricesHide = (item, e) => {
      const index = cards.findIndex(card => card.name === item);
      const newItem = {...cards[index], visible: true};
      const newArray = [
        ...cards.slice(0, index),
        newItem,
        ...cards.slice(index + 1)
      ]
      return setCards(newArray);
      }




  

  const cardsCreate = () => {
    const verstka = cards.map(card => {
        if (card.visible) {
      return (
        <div key={card.price} className="card mb-4 shadow-sm">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">{card.name}</h4>
        </div>
        <div className="card-body" style={card.style} onMouseEnter={() => pricesShow(card.name)} onMouseLeave={() => setCards(card=> !card.visible)}>
          {/* <h1 className="card-title pricing-card-title">{card.price} <small className="text-small">/ mo</small></h1> */}
          <ul className="list-unstyled mt-3 mb-4">

          </ul>
          <button type="button"  className="btn btn-lg btn-block btn-outline-primary">Галерея</button>
        </div>
      </div>
    )
      } else {
        return (
          <div key={card.price} className="card mb-4 shadow-sm">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">{card.name}</h4>
          </div>
          <StyledDiv className="card-body" onMouseEnter={() => pricesShow(card.name)} onMouseLeave={() => pricesHide(card.name)}>
            <h1 className="card-title pricing-card-title">{card.price} <small className="text-small">/ ЧАС</small></h1>
            <button type="button" style={buttonStyle} className="btn btn-lg btn-block btn-outline-primary">Галерея</button>
          </StyledDiv>
        </div>
        )
      }
    })
    return verstka;
  }


  const itemsCards = cardsCreate();

      return (
          <section className='section__prices'>
          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h1 className="display-4">Наши цены</h1>
    <p className="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
  </div>

  <div className="container">
    <div className="card-deck text-center">
        {itemsCards}


    </div>

    
  </div>
  <div className='red_prices'/>
  </section>
      )
  }

export default Prices;