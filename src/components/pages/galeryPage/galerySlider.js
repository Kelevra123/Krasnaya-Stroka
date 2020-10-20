import React, {useState} from 'react';
import img1 from '../../images/gost1.png';
import styled, {keyframes} from 'styled-components';
import {fadeIn} from 'react-animations';
import {Link} from 'react-router-dom';

const StyledDiv = styled.div`animation: 1s ${keyframes`${fadeIn}`}`;
const StyledH1 = styled.h1`animation: 1s ${keyframes`${fadeIn}`}`;

const GalerySlider = ({Pole}) => {


    const [startIndex, setStartIndex] = useState(0);

    const [imgs, changeImgs] = useState(
        [
            {style: img1, id: 0},
            {style: '../../images/ipadInner.png', id: 1},
            {style: '', id: 2},
            {style: '', id: 3}
    ]
    );

    const IndicatorsItems = () => {
        const ind = imgs.map(img => {
            if (img.id === startIndex) {
                return (
                    <StyledDiv onClick={() => setStartIndex(img.id)} key={img.id} className='active_krug'/>
                )
            } else {
                return (
                    <StyledDiv onClick={() => setStartIndex(img.id)} key={img.id} className='krug'/>
                )
            }
        })
        return ind
    }

    const indicators = IndicatorsItems();

    const slides = () => {
        const ViewSlide = imgs.find(img => img.id === startIndex)
        return ViewSlide.style
    }

    const slide = slides();

    return (
        <div className='galery_inside'>
            {Pole}
            <img src={slide} alt='slide' className='galery_slider'/>
            <StyledDiv className='galery_dot_nav_main'>
                <StyledH1 className='dot_nav_header'>Гостинная
                        отношений</StyledH1>
                <StyledDiv className='dot_nav_second'>
                    <Link to='/galery' className='dot_nav_footer'>Галерея</Link>
                    <StyledDiv className='collector_krugov'>
                            {indicators}                       
                    </StyledDiv>
                </StyledDiv>
            

            </StyledDiv>
        </div>
    )
}

export default GalerySlider;