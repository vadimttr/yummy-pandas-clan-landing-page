import styled, { keyframes } from 'styled-components'
import orbitron from '../../font/Orbitron-Regular.ttf'
import roboto from '../../font/Roboto-Light.ttf'


export const TimerContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: #051817;
    padding: 0 0px;
    min-height: 100vh;
    position: relative;
    z-index: 2;
    overflow: hidden;
    @font-face {
        font-family: orbitron;
        src: url(${orbitron});
    }

    @font-face {
        font-family: roboto;
        src: url(${roboto});
    }

    @media screen and (max-width:1024px){
        width: auto;
        height: 55vw;
    }

    @media screen and (max-width:768px){
        width: auto;
        height: 100vh;
        
    }
`

export const TimerBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100.1%;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: auto;
        height: 102%;
    }
    
`
export const ImgBg = styled.img`
    
    @media screen and (min-width:769px){        
       position: relative;
       width: 100%;
       height: 100%;
    }
    
    
    @media screen and (max-width:768.5px){        
        position: relative;
        height: 100%;
        right: 100vh;        
    }
    @media screen and (max-width:468px){
        right: 35vh;
        display:none;
        
    }

`  
export const ImgBgMob = styled.img`
    display:none;
    @media screen and (max-width:468px){
        display:block;
        position: relative;        
        width: auto;
        height: 100%;
        right: 76vh;
        
    }
`

export const ImgPandL = styled.img`
    display:none;
    @media screen and (max-width:468px){        
        display:block;
        position: relative;
        bottom: 98%;
        left: -45%;
        width: 310%;

    }
`
export const ImgBambR = styled.img`
    display:none;
    @media screen and (max-width:468px){        
        display:block;
        position: relative;
        bottom: 175%;
        right: -47%;
        width: 326px;

    }
`
export const TimerContent = styled.div`
    max-width: 1200px;
    width:96%;    
    padding: 2vh;
    padding-top: 5vh;
    padding-left: 5vh;
    padding-right: 5vh;
    display: flex;
   
    justify-content: center;
    top: 4vh;

    @media screen and (max-width:468px){
        padding: 0vh;
    }

`

export const TimerRow = styled.div`
    display: flex;   
    justify-content: center;
    width:100%;
    
`


export const TimerColumn = styled.div`    
    display: flex;  
    padding: 5vh;
    
    width: 100%;
    

`
const pandaLeft = keyframes`
0% {
    bottom:100%;
    left: 5%;
}
40% {
    bottom:-1%;
    left: 10%;
}
65% {
    bottom:15%;
    left: 13%;
}
80% {
    bottom:-1%;
    left: 17%;
}
90% {
    bottom:10%;
    left: 20%;
}
100% {
    bottom:-1%;
    left: 23%;
}
`

export const ImgL = styled.img`
    position: absolute;
    bottom:100%;
    left: 23%;
   
    width: 31%;
    max-height: 435px;
    min-width:70px;  
   
    display: flex;
    justify-content: center;
    animation-name: ${pandaLeft};
    animation-duration: 1.5s;
    animation-timing-function: linear;
    animation-delay: 0.7s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    @media screen and (max-width:768px){
        display:none;
    }
    
    
`

const pandaRight = keyframes`
0% {
    bottom:99%;
    right: 9%;
}
40% {
    bottom:-2%;
    right:14%;
}
65% {
    bottom:15%;
    right:17%;
}
80% {
    bottom:-2%;
    right:21%;
}
90% {
    bottom:10%;
    right:24%;
}
100% {
    bottom:-2%;
    right:27%;
}
`

const pandaRightMob = keyframes`
0% {
    bottom:99%;
    right: -10%;
}

100% {
    bottom:-2%;
    right:10%;
}
`


export const ImgR = styled.img`  
    position: absolute;
    bottom:100%;
    right:27%;      
    width: 21%;
    min-width:70px;
    margin-left:25px;
    
    max-height: 490px;    
    display: flex;
    justify-content: center; 
    animation-name: ${pandaRight};
    animation-duration: 1.5s;
    animation-timing-function: linear;
    animation-delay: 0.8s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    @media screen and (max-width:768px){
        width: 45%;
    }  
    @media screen and (max-width:468px){
        animation-name: ${pandaRightMob};
        animation-duration: 1.0s;
    }
  
`



  


