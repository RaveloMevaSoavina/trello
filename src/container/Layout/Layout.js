import React from 'react'
import Header from './header/header';
import styled from 'styled-components'

function Layout({children}) {
    return (
        <PageContainer>
            <Header/>
            {children}
        </PageContainer>
    )
}

export default Layout

const PageContainer = styled.div`
    background-color : rgb(0,122,186);
    width : 100vw;
    height: 100vh;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
`