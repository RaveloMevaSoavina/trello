import React , {useState} from 'react'
import styled from 'styled-components'
import BoardNavigation from '../../components/Navigation/BoardNavigation'
import ListOnBoard from '../../components/UI/List/ListOnBoard'
import EmptyList from '../../components/UI/List/EmptyList'

const board_list = [
]

function Contact() {
    const [emptyList , setEmptyList] = useState(false);
    const [board_l , setBoard_l] = useState(board_list)

    return (
        <div>
            <BoardNavigation/>
            <BoardList>
                {board_l?.map(board => <ListOnBoard emptyList={emptyList} List={board}/>)}
                <EmptyList addList={()=>{
                    setEmptyList(false);
                    setBoard_l([...board_l , { title : "", cards : []}])
                }}/>
            </BoardList>
        </div>
    )
}

export default Contact

const BoardList = styled.div`
display : flex;
flex-direction : row;
`