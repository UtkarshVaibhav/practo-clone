import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCheck} from '@fortawesome/free-solid-svg-icons';

const MainConatainer= styled.div`
    background-color: white;
    width: 100vw;
    padding-top: 30px;
    padding-left: 30px;
    padding-right: 10px;
    padding-bottom: 60px;
    display: flex;
    flex-direction: column;
    .left{
        .heading{
            width: 400px;
            h1{
                color: #454246;
                font-size: 2rem;
                @media all and (max-width: 1110px)
                {
                    width: 60vw;
                    font-size: 1.2rem;
                }
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
`
export const HeadingContainer = ({head1,head2,tick1,tick2,tick3,buttontxt}) => {
  return (
    <MainConatainer>
            <div className='left'>
                <div className='heading'>
                    <h1>{head1} <span className='top'>{head2}</span></h1>
                </div>
                <div className='ticks'>
                    <p className="icons"><FontAwesomeIcon icon={faCheck}/><span>{tick1}</span></p>
                    <p className="icons"><FontAwesomeIcon icon={faCheck}/><span>{tick2}</span></p>
                    <p className="icons"><FontAwesomeIcon icon={faCheck}/><span>{tick3}</span></p>
                </div>
                <div className='read_more'>{buttontxt}</div>
            </div>
    </MainConatainer>
  )
}
