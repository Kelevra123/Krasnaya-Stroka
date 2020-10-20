import React from 'react';
import styled, {keyframes} from 'styled-components';
import {fadeIn} from 'react-animations';
import {Link} from 'react-router-dom';

const StyledDiv = styled.div`animation: 1s ${keyframes`${fadeIn}`}`;
const StyledH1 = styled.h1`animation: 1s ${keyframes`${fadeIn}`}`;

const GaleryContacts = ({Pole}) => {
    return (
        <div className='galery_inside'>
        {Pole}
            <StyledDiv className='galery_slider_black'>
                <div className='maps'>
                    <iframe title='bigMaps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.1756386439797!2d30.76229495814182!3d46.43127838797755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7dc23f606582a871!2z0KbQtdC90YLRgCDRgNCw0LfQstC40YLQuNGPINC4INC_0LXRgNC10LzQtdC9ICLQmtGA0LDRgdC90LDRjyDQodGC0YDQvtC60LAi!5e0!3m2!1sru!2sua!4v1602939339252!5m2!1sru!2sua" width="495" height="370" frameBorder="0"  allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <StyledH1 id='main_text'>Контакты</StyledH1>
                <StyledH1 id='second_text'>Гагаринское Плато дом 5/2
                    офис 26
                </StyledH1>
                <StyledH1 id='third_text'>Instagram: krasnayastroka_odessa
                    Facebook:www.facebook.com/krstrokaodessa<br/>
                    Тел: 099-975-56-67<br/>
                    066-009-18-07<br/>
                    097-001-77-33<br/>
                    073-001-77-33
                </StyledH1>
                <Link to='/galery/' className='exit_border'/>
                <Link to='/galery/' className='exit_vector'/>
            </StyledDiv>

        </div>
    )
}

export default GaleryContacts;