import React from 'react'
import styled from 'styled-components'


function Card({title}) {
    return (
        <CardContainer>
            <p>{title}</p>
        </CardContainer>
    )
}

export default Card

const CardContainer = styled.div`
    width : 272px;
    height : 100%;
    background-color : rgba(255,255,255,0.5);
    border-radius : 5px;
    padding : 2px 0;
    border-bottom : 1px solid rgba(0,0,0,0.2);
    
    margin : 5px 0;
    p{
        font-size : 14px;
        padding : 10px;
        margin : 0;
        display : inline-block;
        white-space: normal;
        line-height : 20px;
        
    }
`