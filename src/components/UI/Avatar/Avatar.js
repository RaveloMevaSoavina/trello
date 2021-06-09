import React from 'react'
import styled from 'styled-components'

function Avatar({src , alt}) {
    return (
        <AvatarContainer src={src} alt={alt}/>
    )
}

export default Avatar

const AvatarContainer = styled.img`
    border-radius : 100%;
    width : 32px;
    height : 32px;
    margin : 0 2px;
`