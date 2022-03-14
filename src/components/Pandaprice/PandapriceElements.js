import styled from "styled-components"
import roboto from '../../font/Roboto-Light.ttf'

export const PandaContainer = styled.div`
    background: #1b1919;
    display: flex;
    justify-content: center;
    padding: 0 0px;
    height: 100vh;
    position: relative;
    z-index: 1;
    align-items: center;

    

    @font-face {
        font-family: roboto;
        src: url(${roboto});
    }
`

export const PandaBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
`

export const PandaContent = styled.div`
    z-index: 0;
    max-width: 1200px;
    position: relative;
    padding: 2vh;
    padding-top: 5vh;
    padding-left: 5vh;
    padding-right: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 4vh;
`

export const PandaRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PandaColumn = styled.div`
    padding: 5vh;
`

export const FlexboxPandaContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: space-between;
    

    @media screen and (max-width:1024px){
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        align-content: space-between;
        
    }
    
    @media screen and (max-width:768px){
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        align-content: space-between;
    }
`

export const ColumnContent = styled.div`
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const ColumnContent2 = styled.div`
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0vh;
`

export const PandaH1 = styled.h1`
    font-family: roboto;
    font-size: 3vh;
    color: white;
`

export const PandaP = styled.p`
    font-family: roboto;
    font-size: 2vh;
    color: white;
`