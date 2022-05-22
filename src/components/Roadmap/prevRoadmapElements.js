import styled from "styled-components";
import orbitron from '../../font/Orbitron-Regular.ttf'
import roboto from '../../font/Roboto-Light.ttf'
import BabyPanda from '../../font/BabyPanda.ttf'
import bg from '../../image/pandatreeroadmap.PNG'
import newBg from "../../image/roadmap/Rectangle-26.png"

export const RoadmapContainer = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    padding: 0 0px;
    height: 100vh;
    position: relative;
    z-index: 1;
    align-items: center;
    overflow-x: scroll;
    /*padding: 5vh 0vh;*/
    overflow-y: hidden;
    background-image: url("${newBg}");
    width: auto;
    white-space: nowrap;

    @font-face {
        font-family: panda;
        src: url(${BabyPanda});
    }

    @font-face {
        font-family: orbitron;
        src: url(${BabyPanda});
    }

    @font-face {
        font-family: roboto;
        src: url(${roboto});
    }
`

export const FloorBg = styled.img`
    width: 537.7vw;
    height: 6vw;
    position: absolute;
    bottom: 0px;
    min-height: 0px;

    @media screen and (max-width:820px){
        height: 8vh;
        width: 966vw;
    }

    @media screen and (max-width:468px){
        height: 6.5vh;
        width: 540vw;
    }
`

export const Mountain1 = styled.img`
    position: absolute;
    bottom: 7vh;
    left: 0px;
    width: 60%;

    @media screen and (max-width:1024px){
        width: 80%;
    }

    @media screen and (max-width:820px){
        display: flex;
        width: 120vw;
    }

    @media screen and (max-width:468px){
        width: 150vw;
        bottom: 6vh;
    }
`
export const Mountain2 = styled.img`
    position: absolute;
    bottom: 0vh;
    left: 33vw;
    width: 84%;

    @media screen and (max-width:820px){
        display: flex;
        left: 105vw;
        width: 200vw;
        bottom: 3vh;
    }

    @media screen and (max-width:468px){
        width: 165vw;
        bottom: 6vh;
        left: 60vw;
    }
`

export const Mountain3 = styled.img`
    position: absolute;
    bottom: 0vh;
    left: 116vw;
    width: 84%;

    @media screen and (max-width:820px){
        display: flex;
        left: 300vw;
        width: 200vw;
        bottom: 3vh;
    }

    @media screen and (max-width:468px){
        display: none;
    }
`

export const Mountain4 = styled.img`
    position: absolute;
    bottom: 0px;
    left: 191vw;
    width: 84%;

    @media screen and (max-width:468px){
        display: none;
    }
`

export const Mountain5 = styled.img`
    position: absolute;
    bottom: 0px;
    left: 234vw;
    width: 85%;

    @media screen and (max-width:820px){
        display: flex;
        left: 333vw;
        width: 200vw;
        bottom: 3vh;
    }
    
    @media screen and (max-width:468px){
        left: 120vw;
    }
`

export const Cloud1 = styled.img`
    position: absolute;
    bottom: 6vh;
    left: 0px;
    width: 150vw;

    @media screen and (max-width:820px){
        width: 150vw;
        left: 0vw;
    }

    @media screen and (max-width:468px){
        width: 200vw;
        bottom: 5vh;
    }
`

export const Cloud2 = styled.img`
    position: absolute;
    bottom: 6vh;
    left: 10vw;
    width: 60%;

    @media screen and (max-width:820px){
        width: 150vw;
        left: 93vw;
    }

    @media screen and (max-width:468px){
        width: 150vw;
        bottom: 5vh;
        left: 75vw;
    }
`

export const Cloud3 = styled.img`
    position: absolute;
    bottom: 6vh;
    left: 0vw;
    width: 82%;

    @media screen and (max-width:820px){
        width: 200vw;
        left: 0vw;
        bottom: 10vh;
    }

    @media screen and (max-width:468px){
        width: 150vw;
        bottom: 5vh;
        left: 170vw;
    }
`

export const Cloud4 = styled.img`
    position: absolute;
    bottom: 6vh;
    left: 65vw;
    opacity: 0.5;
    transform: scaleX(-1);

    @media screen and (max-width:820px){
        width: 200vw;
        left: 130vw;
        bottom: 6vh;
    }

    @media screen and (max-width:468px){
        bottom: 30vh;
        transform: scaleY(-1);
        width: 50vw;
        left: 0px;
    }
`

export const Cloud5 = styled.img`
    position: absolute;
    bottom: 6vh;
    left: 190vw;
    opacity: 0.5;

    @media screen and (max-width:820px){
        width: 200vw;
        left: 330vw;
        bottom: 6vh;
    }

    @media screen and (max-width:468px){
        display: none;
    }
`

export const Cloud6 = styled.img`
    position: absolute;
    bottom: 6vh;
    left: 193.5vw;
    opacity: 0.5;
    transform: scaleX(-1);

    @media screen and (max-width:820px){
        width: 200vw;
        left: 333vw;
        bottom: 6vh;
    }

    @media screen and (max-width:468px){
        width: 150vw;
        bottom: 5vh;
        left: 170vw;
    }
`

export const Cloud7 = styled.img`
    position: absolute;
    bottom: 6vh;
    left: 227vw;
    width: 92%;

    @media screen and (max-width:820px){
        width: 200vw;
        left: 200vw;
        bottom: 18vh;
    }

    @media screen and (max-width:468px){
        display: none;
    }
`

export const Cloud8 = styled.img`
    display: flex;
    position: absolute;
    bottom: 6vh;
    left: 81.6vw;
    width: 82%;
    transform: scaleX(-1);

    @media screen and (max-width:820px){
        display: none;
    }

    @media screen and (max-width:468px){
        display: none;
    }
`

export const Cloud9 = styled.img`
    position: absolute;
    bottom: 6vh;
    left: 154.26vw;
    width: 82%;
    transform: scaleX(0.781);

    @media screen and (max-width:820px){
        display: flex;
        left: 328vw;
        bottom: 10vh;
        width: 230vw;
    }

    @media screen and (max-width:468px){
        display: none;
    }
`

export const Floor1 = styled.img`
    position: absolute;
    bottom: 0px;
    left: 0vw;
    width: 65%;
    
    @media screen and (max-width:1024px){
        width: 120%;
    }

    @media screen and (max-width:468px){
        width: 150%;
    }
`

export const Floor2 = styled.img`
    position: absolute;
    bottom: 0px;
    left: 24vw;
    width: 65%;

    @media screen and (max-width:1024px){
        width: 120%;
        left: 45vw;
    }

    @media screen and (max-width:468px){
        width: 150%;
        left: 55vw;
    }
`

export const Floor3 = styled.img`
    position: absolute;
    bottom: 0px;
    left: 71vw;
    width: 65%;

    @media screen and (max-width:1024px){
        width: 120%;
        left: 133vw;
    }

    @media screen and (max-width:468px){
        width: 150%;
        left: 115vw;
    }
`

export const Floor4 = styled.img`
    position: absolute;
    bottom: 0px;
    left: 118vw;
    width: 65%;

    @media screen and (max-width:1024px){
        width: 120%;
        left: 221vw;
    }

    @media screen and (max-width:468px){
        display: none;
    }
`

export const Floor5 = styled.img`
    position: absolute;
    bottom: 0px;
    left: 165vw;
    width: 65%;

    @media screen and (max-width:1024px){
        width: 120%;
        left: 309vw;
    }

    @media screen and (max-width:468px){
        display: none;
    }
`

export const Floor6 = styled.img`
    position: absolute;
    bottom: 0px;
    left: 212vw;
    width: 65%;

    @media screen and (max-width:1024px){
        width: 120%;
        left: 397vw;
    }

    @media screen and (max-width:468px){
        display: none;
    }
`

export const Floor7 = styled.img`
    position: absolute;
    bottom: 0px;
    left: 260vw;
    width: 58.75%;

    @media screen and (max-width:1024px){
        width: 105%;
        left: 485vw;
    }

    @media screen and (max-width:820px){
        left: 428vw;
    }

    @media screen and (max-width:468px){
        width: 135%;
        left: 185vw;
    }
`

export const NewBg = styled.img`
    object-fit: fill;
    position: absolute;

    @media screen and (max-width:1024px){
        object-fit: fill;
    }

    @media screen and (max-width:468px){
        object-fit: fill;
    }
`

export const RoadmapBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
`

export const RoadmapContent = styled.div`
    z-index: 0;
    max-width: 1200px;
    position: relative;
    padding-left: 5vh;
    padding-right: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Tree = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    width: 50vw;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 70vw;
    }

    @media screen and (max-width:820px){
        width: 100vw;
    }

    @media screen and (max-width:468px){
        width: 120vw;
    }
`

export const SGN1 = styled.img`
    position: absolute;
    bottom: 2px;
    left: 1vh;
    width: 42vw;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 30vw;
        left: 220vw;
    }

    @media screen and (max-width:820px){
        left: 0;
        width: 80vw;
    }

    @media screen and (max-width:468px){
        width: 100vw;
        left: 0px;
    }
`

export const SGN2 = styled.img`
    position: absolute;
    bottom: 2px;
    left: 1.5vh;
    width: 55vw;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 30vw;
        left: 220vh;
    }

    @media screen and (max-width:820px){
        left: 0;
        width: 110vw;
    }

    @media screen and (max-width:468px){
        width: 135vw;
        left: 0vw;
    }
`

export const SGN2TXT = styled.h1`
    position: absolute;
    left: 143vw;
    bottom: 23.5vh;    
    color: white;
    font-size: 40px;
    font-family: orbitron;

    @media screen and (max-width:820px){
        bottom: 19vh;
        left: 210vw;
    }

    @media screen and (max-width:468px){
        left: 165vw;
        bottom: 12vh;
        font-size: 25px;
    }
`

export const SGN1TXT = styled.h1`
    position: absolute;
    left: 8.5vw;
    bottom: 26vh;    
    color: white;
    font-size: 40px;
    font-family: orbitron;

    @media screen and (max-width:820px){
        bottom: 19vh;
        left: 15vw;
    }

    @media screen and (max-width:468px){
        left: 18vw;
        bottom: 15.3vh;
        font-size: 25px;
    }
`

export const PNB2 = styled.img`
    position: absolute;
    bottom: 2px;
    left: 44vh;
    width: 21vw;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 30vw;
        left: 220vh;
    }

    @media screen and (max-width:820px){
        left: 40vw;
        width: 40vw;
    }

    @media screen and (max-width:468px){
        width: 50vw;
        left: 40vw;
    }
`

export const STP1 = styled.img`
    position: absolute;
    bottom: 60vh;
    left: 92vh;
    width: 22vw;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 30vw;
        left: 220vh;
    }

    @media screen and (max-width:820px){
        left: 40vw;
        width: 45vw;
        bottom: 65vh;
    }

    @media screen and (max-width:468px){
        width: 65vw;
        left: 12vw;
        bottom: 75vh;
    }
`

export const STP2 = styled.img`
    position: absolute;
    bottom: 60vh;
    left: 137vh;
    width: 22vw;
    height: auto;
    overflow: hidden;
    z-index: 1;

    @media screen and (max-width:1024px){
        width: 30vw;
        left: 220vh;
    }

    @media screen and (max-width:820px){
        left: 90vw;
        width: 45vw;
        bottom: 65vh;
    }

    @media screen and (max-width:468px){
        width: 65vw;
        left: 12vw;
        bottom: 52vh;
    }
`

export const STP3 = styled.img`
    position: absolute;
    bottom: 60vh;
    left: 182vh;
    width: 22vw;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 30vw;
        left: 220vh;
    }

    @media screen and (max-width:820px){
        left: 140vw;
        width: 45vw;
        bottom: 65vh;
    }

    @media screen and (max-width:468px){
        width: 65vw;
        left: 12vw;
        bottom: 29vh;
    }
`

export const STP4 = styled.img`
    position: absolute;
    bottom: 25vh;
    left: 104vh;
    width: 22vw;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 30vw;
        left: 220vh;
    }

    @media screen and (max-width:820px){
        left: 52vw;
        width: 45vw;
        bottom: 37vh;
    }

    @media screen and (max-width:468px){
        width: 65vw;
        left: 85vw;
        bottom: 75vh;
    }
`

export const STP5 = styled.img`
    position: absolute;
    bottom: 25vh;
    left: 149vh;
    width: 22vw;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 30vw;
        left: 220vh;
    }

    @media screen and (max-width:820px){
        left: 102vw;
        width: 45vw;
        bottom: 37vh;
    }

    @media screen and (max-width:468px){
        width: 65vw;
        left: 85vw;
        bottom: 52vh;
    }
`

export const STP6 = styled.img`
    position: absolute;
    bottom: 25vh;
    left: 194vh;
    width: 22vw;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 30vw;
        left: 220vh;
    }

    @media screen and (max-width:820px){
        left: 152vw;
        width: 45vw;
        bottom: 37vh;
    }

    @media screen and (max-width:468px){
        width: 65vw;
        left: 85vw;
        bottom: 29vh;
    }
`

export const SGN3 = styled.img`
    position: absolute;
    bottom: 2px;
    left: 190vh;
    width: 90vw;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 30vw;
        left: 220vh;
    }

    @media screen and (max-width:820px){
        left: 115vw;
        width: 200vw;
    }

    @media screen and (max-width:468px){
        width: 195vw;
        left: 72vw;
    }
`

export const PNB3 = styled.img`
    position: absolute;
    bottom: 2.5vh;
    left: 255vh;
    width: 35vw;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 30vw;
        left: 220vh;
    }

    @media screen and (max-width:820px){
        left: 200vw;
        width: 65vw;
    }

    @media screen and (max-width:468px){
        width: 77vw;
        left: 150vw;
        bottom: 2vh;
    }
`

export const STP7 = styled.img`
    position: absolute;
    bottom: 60vh;
    left: 332vh;
    width: 22vw;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 30vw;
        left: 220vh;
    }

    @media screen and (max-width:820px){
        left: 240vw;
        width: 45vw;
        bottom: 65vh;
    }

    @media screen and (max-width:468px){
        width: 65vw;
        left: 177vw;
        bottom: 75vh;
    }
`

export const STP8 = styled.img`
    position: absolute;
    bottom: 60vh;
    left: 377vh;
    width: 22vw;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 30vw;
        left: 220vh;
    }

    @media screen and (max-width:820px){
        left: 290vw;
        width: 45vw;
        bottom: 65vh;
    }

    @media screen and (max-width:468px){
        width: 65vw;
        left: 177vw;
        bottom: 52vh;
    }
`

export const STP9 = styled.img`
    position: absolute;
    bottom: 60vh;
    left: 422vh;
    width: 22vw;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 30vw;
        left: 220vh;
    }

   @media screen and (max-width:820px){
        left: 340vw;
        width: 45vw;
        bottom: 65vh;
    }

    @media screen and (max-width:468px){
        width: 65vw;
        left: 177vw;
        bottom: 29vh;
    }
`

export const STP10 = styled.img`
    position: absolute;
    bottom: 25vh;
    left: 344vh;
    width: 22vw;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 30vw;
        left: 220vh;
    }

    @media screen and (max-width:820px){
        left: 252vw;
        width: 45vw;
        bottom: 37vh;
    }

    @media screen and (max-width:468px){
        width: 65vw;
        left: 250vw;
        bottom: 75vh;
    }
`

export const STP11 = styled.img`
    position: absolute;
    bottom: 25vh;
    left: 389vh;
    width: 22vw;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 30vw;
        left: 220vh;
    }

    @media screen and (max-width:820px){
        left: 302vw;
        width: 45vw;
        bottom: 37vh;
    }

    @media screen and (max-width:468px){
        width: 65vw;
        left: 250vw;
        bottom: 52vh;
    }
`

export const STP12 = styled.img`
    position: absolute;
    bottom: 25vh;
    left: 434vh;
    width: 22vw;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 30vw;
        left: 220vh;
    }

    @media screen and (max-width:820px){
        left: 352vw;
        width: 45vw;
        bottom: 37vh;
    }

    @media screen and (max-width:468px){
        width: 65vw;
        left: 250vw;
        bottom: 29vh;
    }
`

export const PNB = styled.img`
    position: absolute;
    bottom: 0;
    left: 565vh;
    width: 17vw;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 30vw;
        left: 220vh;
    }

    @media screen and (max-width:820px){
        left: 490vw;
        width: 40vw;
    }

    @media screen and (max-width:468px){
        width: 45vw;
        left: 177vw;
        bottom: 1vh;
        display: none;
    }
`

export const PNB4 = styled.img`
    position: absolute;
    bottom: 0;
    left: 540vh;
    width: 12vw;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 30vw;
        left: 220vh;
    }

    @media screen and (max-width:820px){
        left: 462vw;
        width: 25vw;
    }

    @media screen and (max-width:468px){
        width: 28vw;
        left: 270vw;
        bottom: 1vh;
    }
`

export const GZB = styled.img`
    position: absolute;
    bottom: 0vh;
    left: 470vh;
    width: 55vw;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 30vw;
        left: 220vh;
    }

    @media screen and (max-width:820px){
        display: flex;
        left: 385vw;
        width: 115vw;
    }

    @media screen and (max-width:468px){
        width: 60vw;
        display: none;
    }
`

export const RoadmapRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const RoadmapColumn = styled.div`
    padding: 0vh;
`

export const FlexboxRoadmapContainer = styled.div`
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: space-between;
    padding: 0vh;
    left: 0vh;

`

export const ColumnContent = styled.div`
    display: flex;
    justify-content: center;
    height: auto;
    
`

export const ColumnContent2 = styled.div`
    display: flex;
    align-items: center;
    padding: 0vh;
    width: 70vw;

  

    @media screen and (max-width:468px){
        width: 30vw;
    }
`


export const Img = styled.img`
    position: relative;
    height: 60vh;
    width: auto;
    display: flex;
    justify-content: center;
    align-self: center;
`