import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCheck} from '@fortawesome/free-solid-svg-icons';

const MainConatainer= styled.div`
    background-color: #f0f0f5;
    width: 110vw;
    padding-top: 30px;
    padding-left: 30px;
    padding-right: 10px;
    padding-bottom: 60px;
    display: flex;
    flex-direction: column;
    .Upper{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1%;
        img{
            width: 30vw;
            height: 50vh;
        }
        @media all and (max-width: 426px)
        {
            gap: 30px;
            img{
                width:30vw;
                height: 20vh;
                position: relative;
                top: -10px;
                // left: 20px;
            }
        }
    }
    .left{
        .heading{
            width: 400px;
            h1{
                color: #454246;
                font-size: 2rem;
            }
            span{
                font-size: 25px;
            }
            @media all and (max-width: 426px)
            {
                font-size: 13px;
                display: flex;
                width: 150px;

                h1{
                    font-size: 17px;
                    span{
                        font-size: 15px;
                    }
                }

            }
        }
        .ticks{
            margin-top: 15px;
            display: flex;
            flex-direction: column;
            p{
                color: #14bef0;
                margin-bottom: 5px;
                span{
                    margin-left: 5px;
                    color: black;
                }
            }
        }
        .read_more{
            line-height: 38px;
            width: fit-content;
            padding: 2px 12px;
            height: fit-content;
            font-size: 16px;
            color: #fff;
            background-color: #14bef0;
            border-radius: 5px;
            outline: 0;
            font-weight: 700;
            margin: 15px 0px 10px 0;
            &:hover{
                cursor: pointer;
            }
        }
    }
    .Lower{
        width: 100vw;
        display: flex;
        justify-content: center;
        gap: 7%;
        img{
            margin: 10px 5px;
        }
    }
`
export const Safety = () => {
  return (
    <MainConatainer>
        <div className='Upper'>
            <div className='left'>
                <div className='heading'>
                    <h1>Safety of your data is our <span className='top'>top priority</span></h1>
                </div>
                <div className='ticks'>
                    <p className="icons"><FontAwesomeIcon icon={faCheck}/><span>Multi-level security checks</span></p>
                    <p className="icons"><FontAwesomeIcon icon={faCheck}/><span>Multiple data backups</span></p>
                    <p className="icons"><FontAwesomeIcon icon={faCheck}/><span>Stringent data privacy policies</span></p>
                </div>
                <div className='read_more'>Read More</div>
            </div>
            <div className='right'>
                <img src="https://www.practostatic.com/web-assets/home/assets/images/security_1.4f45ac92aba979dac915f864df632d90.png" alt="" />
            </div>
        </div>
        <div className='Lower'>
            <img src="https://www.practostatic.com/web-assets/home/assets/images/security_2.654a7085bfa74c726f26b64edaafd9a5.png" alt="" />
            <img src="https://www.practostatic.com/web-assets/home/assets/images/security_3.a73921ca6e980ed186518d7cb0ce64bf.png" alt="" />
            <img src="https://www.practostatic.com/web-assets/home/assets/images/security_4.216e25d35038f0e7f6d8a514727fa67a.png" alt="" />
            <img src="https://www.practostatic.com/web-assets/home/assets/images/security_5.cf6e04c57178071a67c219b43066ffcf.png" alt="" />
        </div>
    </MainConatainer>
  )
}
