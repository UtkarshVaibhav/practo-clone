import React from 'react';
import styled from 'styled-components';
import { Carousel } from './Containers/Carousel';
import { HeadingContainer } from './Containers/HeadingContainer';
import { Image } from './Containers/Image';

const ContainerOuter = styled.div`
display: flex;
// justify-content: center;
// align-items: center;    
margin: 10px auto;
position: relative;
width: 90vw;
    .one{
        display: flex;
        flex-direction: column;
    }
    .two{
        position: absolute;
        top: 10%;
        left: 40%;
    }
`

export const Appointment = () => {
    const text1="I had severe pain in chest as well blood in cough.  I searched through a lot of pulmonologists based on rankings and feedbacks and finally settled to consult Dr Indu Bubna.  She quickly diagnosed my disease as pulmonary embolism and I was admitted to ICU. Now its all fine. If i would have gotten late then I wouldn't be writing  this.  Thanks Practo!"
    const text2="Very helpful. Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors visited."
    const text3="Very easy to book,maintain history. Hassle free from older versions of booking appointment via telephone.. Thanks Practo for making it simple.";
  return (
           <ContainerOuter>
               <div className='one'>
                   <HeadingContainer head1={"Instant appointment with doctors."} head2={"Guaranteed."} tick1={"100,000 Verified doctors"} tick2={"3M+ Patient recommendations"} tick3={"25M Patients/Year"} buttontxt={"Find me the right doctor"}/>
                   <Carousel show={true} text1={text1} username1="Anuupam Purohit" text2={text2} text3={text3} username2="Jyoti Bhatiya" username3="Anjali Sirivella"/>
               </div>
               <div className='two'>
                   <Image/>
               </div>
           </ContainerOuter>
  )
}
