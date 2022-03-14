import styled from "styled-components"
import orbitron from '../../font/Orbitron-Regular.ttf'
import roboto from '../../font/Roboto-Light.ttf'



export const IntroductionContainer = styled.div`
    background: #1b1919;
    display: flex;
    justify-content: center;
    padding: 0 0px;
    height: 100vh;
    position: relative;
    z-index: 1;
    align-items: center;

    @font-face {
        font-family: orbitron;
        src: url(${orbitron});
    }

    @font-face {
        font-family: roboto;
        src: url(${roboto});
    }
    
`

export const IntroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
`

export const IntroContent = styled.div`
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

    @media screen and (max-width:468px){
        padding: 0vh;
    }
    
`

export const IntroRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const IntroColumn = styled.div`
    padding: 5vh;
`

export const FlexboxIntroContainer = styled.div`
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
    width: 80vh;
    padding: 4vh;

    @media screen and (max-width:1366px){
        width: 45vw;
    }

    @media screen and (max-width:1024px){
        width: 70vw;
    }
   
    @media screen and (max-width:768px){
        width: 70vw;
    }
    
    @media screen and (max-width:468px){
        width: 80vw;
    }
`

export const ColumnContent2 = styled.div`
    display: flex;
    justify-content: center;
    padding: 0vh;
`

export const IntroH1 = styled.h1`
    font-family: roboto;
    color: white;
    display: flex;
    justify-content: flex-start;
    font-size: 2vh;
    letter-spacing: .2vh;
    margin-bottom: 4vh;
    z-index: 1;

    @media screen and (max-width:1024px){
        text-align: center;
        justify-content: center;
        font-size: 1.5vh;
    }

    @media screen and (max-width:768px){
        text-align: center;
        justify-content: center;
    }
`
export const IntroP = styled.p`
    font-family: roboto;
    color: white;
    display: flex;
    justify-content: flex-start;
    font-size: 1.7vh;
    letter-spacing: .2vh;
    line-height: 2.5vh;

    @media screen and (max-width:1024px){
        text-align: center;
        justify-content: center;
        font-size: 1.2vh;
    }

    @media screen and (max-width:768px){
        text-align: center;
        justify-content: center;
    }
`

export const BtnContainer = styled.div`
    display: flex;

    @media screen and (max-width:1024px){
        flex-wrap: wrap;
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width:768px){
        flex-wrap: wrap;
        text-align: center;
        align-items: center;
        justify-content: center;
    }

`

export const ButtonMoto = styled.div`
    
    
    margin-top: 3vh;
    padding: 1.5vh;
    cursor: pointer;
    padding-left: 3vh;
    padding-right: 3vh;
    background-color: #1fc7d4;
    border: 0px solid #197d91;
    border-bottom: 3px solid #197d91;
    border-radius: 10px;
    font-size: 2vh;
    font-family: roboto;
    font-weight: bold;
    justify-content: flex-start;
    color: white;
    
    &:hover{
        background-color: #67d8e3;
    }

    
`

export const Img = styled.img`
    position: relative;
    height: 40vw;
    display: flex;
    justify-content: center;
    align-self: center;

    @media screen and (max-width:1629px){
        height: 20vw;
    }

    @media screen and (max-width:1366px){
        height: 20vw;
    }

    @media screen and (max-width:1024px){
        height: 30vw;
    }

    @media screen and (max-width:468px){
        height: 60vw;
    }
`