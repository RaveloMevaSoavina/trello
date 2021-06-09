import React from 'react'
import styled from 'styled-components'

function Button({children , weight , withpadding}) {
    return (
        <ButtonContainer weight={weight} padding={withpadding}>
            {children}
        </ButtonContainer>
    )
}

export default Button

const ButtonContainer = styled.button`
    border : none;
    background-color : rgb(255,255,255,0.3);
    color : #FFF;
    padding : ${props => (props.padding === 'addpadding' ? "8px 20px" : "6px")};
    height: 32px;
    margin : 0 2px;
    border-radius: 2px;
    cursor : pointer;
    display : flex;
    div{
        font-weight : ${props => (props.weight === 'gras' ? 800 : 400)};
        font-size : 15px;
        line-height: 10px;
        align-self: center;
        height : 20px;
        margin: 0 8px;
        position: relative;
        top : 5px;
    }
    svg {
        fill : #FFF;
        padding : 2px 10px;
    }
`