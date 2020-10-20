import React from 'react';
import styled, {keyframes} from 'styled-components';
import {fadeIn} from 'react-animations';
import {Link} from 'react-router-dom'



const StyledDiv = styled.div`animation: 1s ${keyframes`${fadeIn}`}`;
const StyledH1 = styled.h1`animation: 1s ${keyframes`${fadeIn}`}`;

const GaleryAbout = ({Pole}) => {
    return (
        <div className='galery_inside'>
        {Pole}
            <StyledDiv className='galery_slider_black'>
                    <StyledDiv className='icon_1'/>
                    <StyledDiv className='icon_2'/>
                    <StyledDiv className='icon_3'/>
                    <StyledH1 className='text_1'>Зал вмещает до 40 человек сидящих друг за другом в 6 рядов. Оснащен кондиционером. Чайник и очищенная вода также входят в стоимость.</StyledH1>
                    <StyledH1 className='text_2'>Зал отлично подойдет для презентации, тренинга, мастер-класса. Проектор, флип-чарт, аудиосистема и доска для мела в вашем полном распоряжении.</StyledH1>
                    <StyledH1 className='text_3'>Важно!!! Для использованния проектора вам потребуется ваш ноутбук, оснащенный HDMI-портом и неодходимым для вашей работы ПО. Если вы используете Mac - вам понадобится переходник под HDMI.</StyledH1>
                    <Link to='/galery/' className='exit_border'/>
                    <Link to='/galery/' className='exit_vector'/>
            </StyledDiv>

        </div>
    )
}

export default GaleryAbout;