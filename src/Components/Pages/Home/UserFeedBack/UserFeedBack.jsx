import React from 'react'
import Slider from "react-slick";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const SliderDiv=styled.div`
margin-bottom: 50px;
text-align center;
span{
    font-size: 30px;
    letter-spacing: 2px;
}
h3{
    letter-spacing: 2px;
    width: 45vw;
    margin: 15px auto;
    font-weight: 400;
    @media all and (max-width: 1110px)
    {
        width: 60vw;
    }
    @media all and (max-width: 425px)
    {
        width: 80vw;
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

export const UserFeedBack = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <SliderDiv>
        <span>What our users have to say</span>
    <Slider {...settings}>
    <div>
      <h3>Very helpful. Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors visited.</h3>
      <span className='icon'>
        <FontAwesomeIcon icon={faUser} />
      </span>
      <span className='username'>Amit Sharma</span>
    </div>
    <div>
      <h3>Very easy to book,maintain history. Hassle free from older versions of booking appointment via telephone.. Thanks Practo for making it simple.</h3>
      <span className='icon'>
        <FontAwesomeIcon icon={faUser} />
      </span>
      <span className='username'>Jyoti Bhatiya</span>
    </div>
    <div>
      <h3>Very good app. Well thought out about booking / rescheduling / canceling an appointment. Also, Doctor's feedback mechanism is good and describes all the basics in a good way</h3>
      <span className='icon'>
        <FontAwesomeIcon icon={faUser} />
      </span>
      <span className='username'>Avinash Kumar</span>
    </div>
    </Slider>
    </SliderDiv>
  )
}
