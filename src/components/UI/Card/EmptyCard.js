import React  , {useState} from 'react'
import styled from 'styled-components'

function EmptyCard({addCardLabel}) {
    const [label , setLabel] = useState("")

    return (
        <EmptyCardInputContainer>
            <textarea placeholder="Saisissez un titre pour cette carte" onChange={(e)=>setLabel(e.target.value)} autoFocus/>
            <AddAList onClick={()=>addCardLabel(label)}>Ajouter une liste</AddAList>
            <svg height="15" viewBox="0 0 329.26933 329" width="15" xmlns="http://www.w3.org/2000/svg"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
        </EmptyCardInputContainer>
    )
}

export default EmptyCard

const EmptyCardInputContainer = styled.div`
    margin : 10px auto;

    textarea{
        padding: 10px;
        display : block;
        width : 250px;
        height : 67px;
        resize : none;
        border:none;
        border-bottom : 1px solid rgba(0,0,0,0.2);
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
        margin-bottom : 10px;
    }
`

const AddAList = styled.button`
    color : #FFF;
    background-color : #026aa7;
    border : none;
    padding : 10px ;
    margin-right : 20px;

`