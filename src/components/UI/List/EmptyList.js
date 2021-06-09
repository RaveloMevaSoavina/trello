import React from 'react'
import styled from 'styled-components'

function EmptyList({ addList }) {
    return (
        <EmptyListe onClick={addList}>
                <button>
                <svg width="20" height="20" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C11.4477 3 11 3.44772 11 4V11L4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11L13 11V4C13 3.44772 12.5523 3 12 3Z" fill="currentColor"></path></svg>
                    Ajouter une autre liste
                </button>
        </EmptyListe>
    )
}

export default EmptyList



const EmptyListe = styled.div`
background-color : none;
width : 272px;
margin : 20px 10px;
button{
    border : none;
    width : 100%;
    height : 40px;
    text-align : left;
    background-color : rgba(255,255,255,0.2);
    cursor : pointer;
    padding : 5px 20px 5px 5px;
    color : #FFF;
    border-radius : 5px;
    display : flex;
    align-items : center;
    font-weight : 600;
    &:hover{
        background-color : rgba(255,255,255,0.3);
    }
    svg{
        margin-right: 10px;
    }
}

`