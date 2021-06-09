import React , {useState} from 'react'
import styled from 'styled-components'
import Card from '../Card/Card'
import EmptyCard from '../Card/EmptyCard'


function ListOnBoard({emptyList, List}) {

    const [listDetails , setListDetails] = useState(List)
    const [emptyCard , setEmptyCard] = useState(true)
    const [addingCard , setAddingCard] = useState(false)

    const handleAddLable = (value) => {
        setListDetails({...listDetails , cards : [...listDetails.cards, {label : value}]})
        setAddingCard(false)
    }

    console.log(listDetails)


    return (
        <React.Fragment>
            {emptyList &&
             <ListContainer>
                {!emptyCard ? 
                <React.Fragment>
                    <HeaderList>
                        <Input type="text" value={`${listDetails?.title?.slice(0, 23)} ${listDetails?.title?.length < 23 ? " " : "..."}`}/>
                        <svg enable-background="new 0 0 515.555 515.555" height="15" viewBox="0 0 515.555 515.555" width="15" xmlns="http://www.w3.org/2000/svg"><path d="m496.679 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"/><path d="m303.347 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"/><path d="m110.014 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"/></svg>
                    </HeaderList>
                    {listDetails?.cards?.map(card => <Card title={card.label} />)}
                    {addingCard && <EmptyCard addCardLabel={handleAddLable}/>}
                    <FooterList>
                        <button onClick={()=> setAddingCard(true)}>
                            <svg width="20" height="20" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C11.4477 3 11 3.44772 11 4V11L4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11L13 11V4C13 3.44772 12.5523 3 12 3Z" fill="currentColor"></path></svg>
                            Ajouter une autre carte
                        </button>
                    </FooterList>
                </React.Fragment>
                : (
                    <AddListTitle>
                        <EmptyInput type="text" placeholder="Saisissez le titre de la liste" autoFocus onChange={(e)=> setListDetails({...listDetails , title : e.target.value})}/>
                        <AddAList onClick={()=> setEmptyCard(!emptyCard)}>Ajouter une liste</AddAList>
                        <svg height="15" viewBox="0 0 329.26933 329" width="15" xmlns="http://www.w3.org/2000/svg"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
                </AddListTitle>
                )}
        </ListContainer>}
        </React.Fragment>
    )
}

export default ListOnBoard


const ListContainer = styled.div`
    width : 272px;
    height : 100%;
    background-color : rgb(235,236,240);
    margin : 20px 10px;
    border-radius : 5px;
    border : none;
    padding : 10px;
`

const HeaderList = styled.div`
    svg{
        fill : rgba(0,0,0,0.3)
    }
    display : flex;
    justify-content : space-between;
`

const Input = styled.input`
    border: none;
    box-shadow: none;
    background-color : rgb(235,236,240);
    border-radius: 2px;
    color: rgba(0,0,0,0.8);
    padding: 0 8px;
    margin-right: 5px;
    line-height: 1.75;
    font-weight: 600;
    font-size: 16px;
    height: 28px;
    &:focus{
        background-color : rgb(255,255,255);
        color : #000;
    }

`

const FooterList = styled.div`
    margin-top : 20px;
    height : 100%;
    button{
        border : none;
        width : 100%;
        text-align : left;
        background-color : transparent;
        cursor : pointer;
        padding : 5px 20px 5px 5px;
        color : rgba(0,0,0,0.5);
        border-radius : 5px;
        display : flex;
        align-items : center;
        font-weight : 600;
        &:hover{
            background-color : rgba(9,30,66,.08);
        }
        svg{
            margin-right: 10px;
        }
    }


`

const AddAList = styled.button`
    color : #FFF;
    background-color : #026aa7;
    border : none;
    padding : 10px ;
    margin-right : 20px;

`

const EmptyInput = styled.input`
    width : 264px;
    height : 30px;
    border : none;
    margin-bottom : 10px;

`

const AddListTitle = styled.div`
svg{
}`