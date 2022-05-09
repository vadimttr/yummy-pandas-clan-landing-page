import styled from 'styled-components'
import orbitron from '../../font/Orbitron-Regular.ttf'
import roboto from '../../font/Montserrat.ttf'
import indigo from '../../font/IndigoRegular.otf'
import league from '../../font/LeagueSpartan-Bold.otf'
import BabyPanda from '../../font/BabyPanda.ttf'

export const RarityContainer = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    padding: 0 0px;
    height: auto;
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
        font-family: indigos;
        src: url(${indigo});
    }

    @font-face {
        font-family: panda;
        src: url(${BabyPanda});
    }
`

export const RarityBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
`

export const RarityContent = styled.div`
    max-width: 1200px;
    position: relative;
    padding: 2vh;
    padding-top: 5vh;
    padding-left: 2vh;
    padding-right: 2vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width:468px){
        padding: 0vh;
    }
`

export const RarityRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const RarityColumn = styled.div`
    padding: 5vh;

    @media screen and (max-width:820px){
        padding: 0;
    }
`

export const FlexboxRarityContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: space-between;
    padding-left: 5vh;
    padding-right: 5vh;

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
    width: 50%;

    @media screen and (max-width:1024px){
        width: auto;
    }
`

export const ColumnContent2 = styled.div`
    display: flex;
    justify-content: center;
    padding: 0vh;
`
export const RarityH1 = styled.h1`
    font-family: panda;
    font-size: 3vw;
    color: #000;
    margin-bottom: 2vh;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.4vh;
    @media screen and (max-width:1024px){
        font-size: 5vh;
    }

    @media screen and (max-width:768px){
        font-size: 5vh;
    }
    

    @media screen and (max-width:468px){
        font-size: 5vh;
    }
`

export const RarityP = styled.p`
    font-family: roboto;
    color: #000;
    display: flex;
    justify-content: flex-start;
    font-size: 1vw;
    letter-spacing: .2vh;
    line-height: 3vh;

    @media screen and (max-width:1024px){
        font-size: 2vh;
    }
    
    @media screen and (max-width:768px){
        font-size: 3vw;
    }

    @media screen and (max-width:468px){
        font-size: 4vw; 
    }
`
export const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 90vw;
    padding: 0;
    margin:auto;
    

    @media screen and (max-width:1024px){
        width: auto;
    }

    @media screen and (max-width:820px){
        width: auto;
        
        > * {
            margin: 15px;
        }

        img {
            padding: 0;
            height: 25vh;
        }
    }

    @media screen and (max-width:468px){
        padding-left: 20px;
        padding-right: 20px; 

        > * {
            display: flex;
            padding: 0;
            padding-bottom: 20px;
            width: 50%;
            margin: auto;
        }

        > div > div {
            margin: auto;
        }

        img {
            width: 45vw;
            padding: 0;
            height: auto;
        }
    }

    
`


export const ImgWrapper = styled.div`
   
    height: auto;
    
`

export const Img = styled.img`

    height: 30vw;
    width: auto;
    padding: 2vh;
    display: flex;
    justify-content: center;
    align-self: center;

    @media screen and (max-width:1024px){
        height: 25vw;
    }

    @media screen and (max-width:768px){
        height: 60vw;
    }

    @media screen and (max-width:468px){
        height: 80vw;
    }
`

export const ImgAnim = styled.img`
    position: relative;
    height: 30vw;
    width: auto;
    padding: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width:1024px){
        height: 40vh;
    }
`

