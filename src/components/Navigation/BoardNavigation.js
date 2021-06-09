import React , {useState} from 'react'
import styled from 'styled-components'
import Button from '../UI/Button/Button'
import Avatar from '../UI/Avatar/Avatar'
import AutosizeInput from 'react-input-autosize';

import imageAvatar from "../../assets/images/IMG_0387.jpg"

const inputStyle = {
    border: "none",
    boxShadow: "none",
    backgroundColor : "rgba(255,255,255,0.3)",
    borderRadius: "2px",
    color: "#FFF",
    padding: "0 8px",
    marginRight: "5px",
    lineHeight: 1.75,
    fontWeight: 800,
    fontSize: "16px",
    height: "32px",
    outline : "none",
}
    

function BoardNavigation() {

    const [style, setStyle] = useState(inputStyle)

    
    return (
        <NavigationBoardContainer>
            <LeftButtonGroup>
                <AutosizeInput value="PROJET DEVLLO" 
                onFocus={(e)=> {
                    e.currentTarget.select();
                    setStyle({...style , backgroundColor : "rgb(255,255,255)" , color : "#000"})
                }} 
                onBlur={(e)=> {
                    e.currentTarget.select();
                    setStyle({...style , backgroundColor : "rgba(255,255,255,0.3)" , color : "#FFF"})
                }} 
                inputStyle={style} />
                <Button>
                    <svg height="15" viewBox="0 -10 511.98685 511" width="15" xmlns="http://www.w3.org/2000/svg"><path  d="m114.59375 491.140625c-5.609375 0-11.179688-1.75-15.933594-5.1875-8.855468-6.417969-12.992187-17.449219-10.582031-28.09375l32.9375-145.089844-111.703125-97.960937c-8.210938-7.167969-11.347656-18.519532-7.976562-28.90625 3.371093-10.367188 12.542968-17.707032 23.402343-18.710938l147.796875-13.417968 58.433594-136.746094c4.308594-10.046875 14.121094-16.535156 25.023438-16.535156 10.902343 0 20.714843 6.488281 25.023437 16.511718l58.433594 136.769532 147.773437 13.417968c10.882813.980469 20.054688 8.34375 23.425782 18.710938 3.371093 10.367187.253906 21.738281-7.957032 28.90625l-111.703125 97.941406 32.9375 145.085938c2.414063 10.667968-1.726562 21.699218-10.578125 28.097656-8.832031 6.398437-20.609375 6.890625-29.910156 1.300781l-127.445312-76.160156-127.445313 76.203125c-4.308594 2.558594-9.109375 3.863281-13.953125 3.863281zm141.398438-112.875c4.84375 0 9.640624 1.300781 13.953124 3.859375l120.277344 71.9375-31.085937-136.941406c-2.21875-9.746094 1.089843-19.921875 8.621093-26.515625l105.472657-92.5-139.542969-12.671875c-10.046875-.917969-18.6875-7.234375-22.613281-16.492188l-55.082031-129.046875-55.148438 129.066407c-3.882812 9.195312-12.523438 15.511718-22.546875 16.429687l-139.5625 12.671875 105.46875 92.5c7.554687 6.613281 10.859375 16.769531 8.621094 26.539062l-31.0625 136.9375 120.277343-71.914062c4.308594-2.558594 9.109376-3.859375 13.953126-3.859375zm-84.585938-221.847656s0 .023437-.023438.042969zm169.128906-.0625.023438.042969c0-.023438 0-.023438-.023438-.042969zm0 0"/></svg>
                </Button>
                <Separator/>
                <Button withpadding="addpadding">
                    Personnelle
                </Button>
                <Separator/>
                <Button withpadding="addpadding">
                    Privée
                </Button>
                <Separator/>
                <Avatar src={imageAvatar} alt="avatar"/>
                <Button withpadding="addpadding">
                    Invité
                </Button>
            </LeftButtonGroup>
            <RightButtonGroup>
                <Button>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.21234 2.79947C8.29833 2.61633 8.48261 2.49955 8.68494 2.5L15.3137 2.51465C15.5157 2.51509 15.6993 2.63238 15.7846 2.81556C15.87 2.99874 15.8416 3.21473 15.7119 3.36971L12.1298 7.65085H15.1664C15.3797 7.65085 15.5715 7.78094 15.6503 7.97916C15.7292 8.17738 15.6792 8.40365 15.5242 8.55019L5.54499 17.9827C5.35867 18.1588 5.07191 18.1731 4.86897 18.0165C4.66602 17.8598 4.60726 17.5788 4.73044 17.3539L7.87765 11.6092H4.89583C4.71761 11.6092 4.55176 11.5181 4.4562 11.3676C4.36064 11.2172 4.34863 11.0283 4.42438 10.867L8.21234 2.79947Z" fill="white"/>
                </svg>
                    Automation
                </Button>
                <Button>
                <svg enable-background="new 0 0 515.555 515.555" height="15" viewBox="0 0 515.555 515.555" width="15" xmlns="http://www.w3.org/2000/svg"><path d="m496.679 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"/><path d="m303.347 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"/><path d="m110.014 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"/></svg>
                    Afficher le menu
                </Button>
            </RightButtonGroup>
        </NavigationBoardContainer>
    )
}

export default BoardNavigation

const NavigationBoardContainer = styled.div`
    // background-color : red;
    margin : 10px 10px;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
`

const LeftButtonGroup = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-between;

`

const RightButtonGroup = styled.div`
display : flex;
flex-direction : row;
justify-content : space-between;
`


const Separator = styled.div`
    width : 10px;
    height : 20px;
    margin: 5px 0 0 5px;
    border-left : 1px solid rgb(255,255,255,0.3);
    ;

`