import React from 'react'
import styled from 'styled-components'
const VideoStyled = styled.video`
width: 60vw;
height: 75vh;
margin-right: 40vw;
@media all and (max-width: 1110px){
  width: 50vw;
height: 55vh;
   display: flex;
   position: absolute;
   left: 150px;
   top: -40px;
}
@media all and (max-width: 426px){
    display: flex;
    width: fit-content;
    height: 200px;
    margin-right: 0;
    position: absolute;
    left: 150px;
    top: -40px;
  }
`
export const Image = () => {
  return (
    <VideoStyled  poster="//www.practostatic.com/web-assets/home/assets/images/book.875ca26a3c4283c777660377e421e99b.png" width="250" height="480" loading="false" autoplay={"true"} loop={"true"}><source src="//www.practostatic.com/web-assets/home/assets/videos/appointment.700ce682eaec91bf93b6574cb8f09cd0.webm" type="video/webm"/></VideoStyled>
  )
} 
