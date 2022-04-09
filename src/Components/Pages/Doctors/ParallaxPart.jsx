import React from 'react';
import styled from 'styled-components';
import { faBookBible, faBookOpen, faCartShopping, faFlask, faMessage, faSuitcaseMedical } from '@fortawesome/free-solid-svg-icons';
import {RouteBox} from './RouteBox';

const TopMargin = styled.div`
height: 30px;
width:110vw;
background-color:#f0f0f5;
`
const SearchDiv = styled.div`
background-image:url(https://www.practostatic.com/web-assets/home/assets/images/homepage.06859593240c3efd483fe48951cfe6ff.svg);
background-repeat: no-repeat;
background-size: cover;
width: 110vw;
height: 70vh;
display: flex;
flex-direction:column;
text-align: center;
background-color: blue;
text-align: center;
font-weight: 700;
color: #8d93b3;
span{
  font-weight: 400;
  margin: 5px;
}
span:hover{
  cursor:pointer;
  color: white;
  text-decoration: underline;
}
h1{
font-size: 40px;
color: white;
margin: 2% 0;
}
h3{
  margin: 2% 0;
  color: white;
}
input{
  width: 30vw;
  margin: 0 0 20px 0;
  padding: 15px;
  outline: 0;
  border-radius: 2px;
  position: relative;
  right: 30px;
}
@media all and (max-width: 426px)
{
  height:20vh;
  h1{
    font-size: 10px;
    margin-bottom: 5px;
  }
  .location,p{
    display: none;
  }
  input{
    font-size: 9.4px;
    padding: 5px;
    right: 0px;
  }
}
}
`
const LowerNavBar=styled.div`
background-color: #1d2869;
width: 100vw;
font-size: 15px;
text-align: center;
padding: 10px 5px;
.routes{
  width: 70vw;
  display: flex;
  justify-content: space-around;
  color: #b8bbd9;
  margin: auto;
  @media all and (max-width: 426px)
  {
    width: 110vw;
    font-size: 10px;
  }
}
@media all and (max-width: 426px)
{
  width: 110vw;
}
`
export const ParallaxPart = () => {
  return (
    <>
    <TopMargin></TopMargin>
    <SearchDiv>
      {/* <img src="https://www.practostatic.com/web-assets/home/assets/images/homepage.06859593240c3efd483fe48951cfe6ff.svg" alt="" /> */}
      <h1>Your home for health</h1>
      <h3>Find and Book</h3>
      <div className='input-div'>
      <input type="text" placeholder='Location' className='location'/>
      <input type="text" placeholder='Search Doctors,Clinics,Hospitals,etc.' />
      </div>
      <p>Popular searches: <span>Dermatologist</span> <span>Pediatrician</span> <span>Gynecologist/Obstetrician</span><span>Others</span></p>
    </SearchDiv>  
    <LowerNavBar>
      <div className='routes'>
          <RouteBox icon={faMessage} title="Consult with a doctor"/>
          <RouteBox icon={faCartShopping} title="Order Medicines"/>
          <RouteBox icon={faBookBible} title="View medical records"/>
          <RouteBox icon={faFlask} title="Book test"/>
          <RouteBox icon={faBookOpen} title="Read articles"/>
          <RouteBox icon={faSuitcaseMedical} title="For health provider" name="provider"/>
      </div>
    </LowerNavBar>
    </>
      
  )
}
