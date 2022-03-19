import styled from 'styled-components'
import orbitron from '../../font/Orbitron-Regular.ttf'
import roboto from '../../font/Roboto-Light.ttf'

export const RarityContainer = styled.div`
    background: #000;
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

export const RarityRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const RarityColumn = styled.div`
    padding: 5vh;
`

export const FlexboxRarityContainer = styled.div`
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
    display: flex;
    justify-content: center;
    padding: 0vh;
`
export const RarityH1 = styled.h1`
    font-family: roboto;
    font-size: 3vh;
    color: white;
`

export const RarityP = styled.p`
    font-family: roboto;
    color: white;
    display: flex;
    justify-content: flex-start;
    font-size: 1.7vh;
    letter-spacing: .2vh;
    line-height: 2.5vh;
`

export const Img = styled.img`
    position: relative;
    height: 300px;
    width: 300px;
    padding: 5vh;
    display: flex;
    justify-content: center;
    align-self: center;
`