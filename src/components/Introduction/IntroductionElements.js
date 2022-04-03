import styled from "styled-components"
import orbitron from '../../font/Orbitron-Regular.ttf'
import roboto from '../../font/Roboto-Light.ttf'
import BabyPanda from '../../font/BabyPanda.ttf'
import bg from '../../image/coolimage2.JPG'
import bgHouse from '../../image/house.jpg'
export const IntroductionContainer = styled.div`
    background: white;
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

    @font-face {
        font-family: panda;
        src: url(${BabyPanda});
    }
    
`

export const IntroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 110%;
    overflow: hidden;
    z-index: 0;
    background-image: url(${bg});
    background-size: cover;

    @media screen and (max-width:1024px){
     
        background-image: url(${bgHouse});
        background-size: cover;
        background-position: center;
    }

    @media screen and (max-width:980px){
       
        background-image: url(${bgHouse});
        background-size: cover;
        background-position: center;
    }
    
    @media screen and (max-width:768px){
        background-image: url(${bgHouse});
        background-size: cover;
        background-position: center;
    }

    @media screen and (max-width:468px){
        background-image: url(${bgHouse});
        background-size: cover;
        background-position: center;
    }
`

export const IntroContent = styled.div`
    z-index: 0;
    max-width: 1200px;
    position: relative;

    padding-left: 5vh;
    padding-right: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;


    @media screen and (max-width:468px){
        padding: 0vh;
    }
    
`

export const IntroRow = styled.div`
    display: flex;
    align-items: center;
`

export const IntroColumn = styled.div`
    padding: 0vh;
`

export const FlexboxIntroContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: space-between;
    width: 100vw;
    

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
    justify-content: flex-start;
    width: 45vw;
    position: relative;
    top: 15vh;
    padding-left: 10vh;
    padding-right: 10vh;
  

    @media screen and (max-width:1366px){
        width: 60vw;
        top: 0vh;
        padding-left: 0vh;
        padding-right: 0vh;
    }

    @media screen and (max-width:1024px){
        width: 70vw;
        top: 0vh;
        padding-left: 5vh;
        padding-right: 5vh;
    }
   
    @media screen and (max-width:768px){
        width: 70vw;
        top: 0vh;
        padding-left: 0vh;
        padding-right: 0vh;
    }
    
    @media screen and (max-width:468px){
        width: 80vw;
        top: 0vh;
        padding-left: 0vh;
        padding-right: 0vh;
    }
`

export const ColumnContent2 = styled.div`
    display: flex;
    justify-content: flex-start;
    visibility: hidden;
   
`

export const IntroH1 = styled.h1`
    font-family: panda;
    color: #fff;
    display: flex;
    justify-content: center;
    font-size: 2vh;
    letter-spacing: .2vh;
    margin-bottom: 4vh;
    z-index: 1;
    text-transform: uppercase;
    text-shadow: 1px 1px 8px #000;
    text-align: center;

    @media screen and (max-width:1024px){
        text-align: center;
        justify-content: center;
        font-size: 2vh;
    }

    @media screen and (max-width:768px){
        text-align: center;
        justify-content: center;
    }
`
export const IntroP = styled.p`
    font-family: roboto;
    color: #fff;
    display: flex;
    justify-content: flex-start;
    font-size: 1.5vh;
    letter-spacing: .2vh;
    line-height: 1.8vh;
    text-shadow: 2px 2px 8px #000;
    text-align: left;
    margin-bottom: 1vh;

    @media screen and (max-width:1024px){
        text-align: left;
        justify-content: flex-start;
        font-size: 1.5vh;
    }

    @media screen and (max-width:768px){
        text-align: left;
        justify-content: flex-start;
    }
`


export const Img = styled.img`
    position: relative;
    height: 30vw;
    width: auto;
    display: flex;
    justify-content: center;
    align-self: center;

    @media screen and (max-width:1629px){
        height: 40vw;
    }

    @media screen and (max-width:1366px){
        height: 40vw;
    }

    @media screen and (max-width:1024px){
        height: 31vw;
    }

    @media screen and (max-width:768px){
        height: 50vw;
    }

    @media screen and (max-width:468px){
        height: 60vw;
    }
`

export const ImgBg = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
`