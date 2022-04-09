import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'


const BoxRoute = styled.div`
border-right: ${({name})=>name==="provider"?"none":"1px solid white"} ;
padding-right: 20px;
&:hover{
cursor: pointer;
color:white;
}
.icons{
  margin: 3px;
  zoom: 0;
  &:hover{
    zoom: 1.2;
  }
}
@media all and (max-width: 425px)
{
  border-right: none;
}
`
export const RouteBox = ({icon,title,name}) => {
  return (
    <BoxRoute name={name}>
      <div className='icons'>
        <FontAwesomeIcon icon={icon} />
      </div>
        {title}
    </BoxRoute>
  )
}
