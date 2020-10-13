import React, {useState, useEffect} from 'react';
import styled, {keyframes} from 'styled-components';
import {fadeIn} from 'react-animations';
import img1 from '../images/slider4.jpg'
import img2 from '../images/slider5.jpg'
import img3 from '../images/slider6.jpg'

const StyledDiv = styled.div`animation: 2s ${keyframes`${fadeIn}`}`;

function Slider()  {
    

    const [imgs, setImgs] = useState([{body: img2, id: 1, label: 'Приветствую', text: 'Здесь ты точно найдешь то, что искал.', active: true}, 
    {body: img3, id: 2, label: '', text: 'Ваш комфорт - наш приоритет.', active: false}, 
    {body: img1, id: 3, label: '', text: 'Уютное рабочее место в центре города.', active: false}
    ]);

    const [startIndex, setStartIndex] = useState(1);


    const slide = (startIndex) => {
        const item = imgs.filter(item => item.id === startIndex);
        const slid = item.map(item => {
            const {id, label, body, text} = item;
            return (
                <StyledDiv key={id} className='carousel-item active'>
                    <img src={body} alt='Слайд'/>
                        <div className="container">
                        <div className="carousel-caption text-left">
                            <h1>{label}</h1>
                            <p className='carousel-item-text'>{text}</p>
                            {/* <p><a className="btn btn-lg btn-primary item-btn" href="#" role="button">Галерея</a></p> */}
              </div>
            </div>
          </StyledDiv> 
            )
        });
        return slid;
        }

        const toggleActive = () => {
            setImgs(imgs => {
                imgs.forEach(im => im.active = false)
                return imgs;
            })
            setImgs(imgs => {
                imgs.map(img => {
                    if (img.id === startIndex) {
                       img.active = true;
                    }
                })
                return imgs;
            })

        }

        const slideRight = () => {
            if (startIndex === imgs.length) {
                setStartIndex(1);
                toggleActive();

            } else {
                setStartIndex(startIndex + 1);
                toggleActive();
            }      
        }
        const slideLeft = () => {
            if (startIndex <= 1 ) {
                setStartIndex(imgs.length);
                toggleActive();
            } else {
                setStartIndex(startIndex - 1);
                toggleActive();
            }      
        }
        const indication = () => {

            const ind = imgs.map(item => {
                const activeInd = () => {
                    const activeClass = 'active'
                    if (item.id === startIndex) {
                        return activeClass
                    }
                }
                    return (
                        <li 
                        key={item.text} 
                        id={item.id} 
                        data-target="#myCarousel" 
                        onClick={() => setStartIndex(item.id)}
                        data-slide-to="0" 
                        className={activeInd()}
                        ></li>
                    )
            })
            return ind;
        }

        const indicators = indication();

        return (
            <section className='slider__section'>
            <div id='content'
                className='site-content'>
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            {indicators}
                        </ol>
                        <div className="carousel-inner">
                            {slide(startIndex)}
                        </div>
                        <div className="carousel-control-prev"  role="button" data-slide="prev" 
                        onClick={() => slideLeft()}>
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </div>
                        <div className="carousel-control-next"  role="button" data-slide="next" 
                        onClick={() => slideRight()}>
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </div>
    </div>
                </div>
                </section>
        )
    }



export default Slider;