
import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons';
const SliderDiv=styled.div`
// background-color: blue;
margin-bottom: 50px;
padding-bottom: 30px;
width: 60vw;
margin-left: 20px;
@media all and (max-width: 426px)
{
    width: 100vw;
    text-align center;
}
h3{
    text-align:start;
    letter-spacing: 2px;
    width: 30vw;
    margin: 25px 0;
    font-weight: 400;
    @media all and (max-width: 1110px)
    {
        width: 60vw;
        font-size: 0.9rem;
    }
    @media all and (max-width: 426px)
    {
        margin: 15px auto;
        width: 80vw;
        text-align: start;
    }
  }
  .username{
    font-size: 15px;
  }
  .icon{
  background-color:#e0e0e5;
    border-radius: 50%;
    font-size: 15px;
    padding: 10px;
    margin-right: 10px;
  }
`
const StyledSpan = styled.span`
display:${({show})=>show?"flex":"none"};
color: #00a500;
gap: 2px;
@media all and (max-width: 426px)
{
    justify-content: center;
}
`
export const Carousel = ({show,text1,text2,text3,username1,username2,username3}) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <SliderDiv>
        <StyledSpan show={show}>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
        </StyledSpan>
    <Slider {...settings}>
    <div>
      <h3>{text1}</h3>
      <span className='icon'>
        <FontAwesomeIcon icon={faUser} />
      </span>
      <span className='username'>{username1}</span>
    </div>
    <div>
      <h3>{text2}</h3>
      <span className='icon'>
        <FontAwesomeIcon icon={faUser} />
      </span>
      <span className='username'>{username2}</span>
    </div>
    <div>
      <h3>{text3}</h3>
      <span className='icon'>
        <FontAwesomeIcon icon={faUser} />
      </span>
      <span className='username'>{username3}</span>
    </div>
    </Slider>
    </SliderDiv>
  )
}
