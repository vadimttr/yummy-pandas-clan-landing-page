import styled from "styled-components"
import roboto from '../../font/Montserrat.ttf'
import league from '../../font/LeagueSpartan-Bold.otf'
import BabyPanda from '../../font/BabyPanda.ttf'

export const PandaContainer = styled.div`
    background: #faffd7;
    display: flex;
    justify-content: center;
    padding: 0 0px;
    height: auto;
    position: relative;
    z-index: 1;


    @font-face {
        font-family: roboto;
        src: url(${roboto});
    }

    @font-face {
        font-family: panda;
        src: url(${BabyPanda});
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
    padding: 0vh;
    display: flex;

    justify-content: center;
    
`

export const PandaRow = styled.div`
    display: flex;
  
    justify-content: center;
`

export const PandaColumn = styled.div`
    
`

export const FlexboxPandaContainer = styled.div`
    display: flex;
    justify-content: space-around;
    
    align-content: space-between;

    padding-right: 25vh;
    padding-left: 25vh;
    width: 100%;
    
    @media screen and (max-width:1366px){
        flex-wrap: wrap;
        justify-content: space-around;
    
        align-content: space-between;
        
        padding-right: 5vh;
        padding-left: 5vh;
        
    }


    @media screen and (max-width:1024px){
        flex-wrap: wrap;
        justify-content: space-around;

        align-content: space-between;
       
        padding-right: 5vh;
        padding-left: 5vh;
        
    }
    
    @media screen and (max-width:768px){
        flex-wrap: wrap;
        justify-content: space-around;

        align-content: space-between;
        
 
        padding-right: 5vh;
        padding-left: 5vh;
   
    }

    @media screen and (max-width:468px){
        flex-wrap: wrap;
        justify-content: space-around;

        align-content: space-between;
        

        padding-right: 0vh;
        padding-left: 0vh;
   
    }


    
`

export const ColumnContent = styled.div`
    flex-wrap: wrap;
    justify-content: center;
    width: 50%;
    padding-top: 5vh;
    padding-left: 5vh;
    padding-right: 5vh;
    padding-bottom: 0;

    @media screen and (max-width:1024px){
        width: 100%;
    }

    @media screen and (max-width:768px){
        width: 100%;
    }

    @media screen and (max-width:468px){
        width: 100%;
    }
`

export const ColumnContent2 = styled.div`
    flex-wrap: wrap;
    justify-content: center;

    padding-top: 10vh;
    padding-left: 5vh;
    padding-right: 5vh;
    @media screen and (max-width:1024px){
        width: 100%;
    }

    @media screen and (max-width:768px){
        width: 100%;
    }

    @media screen and (max-width:468px){
        width: 100%;
    }
`

export const PandaH1 = styled.h1`
    font-family: panda;
    font-size: 3vw;
    color: #534741;
    padding-bottom: 2vh;
    text-transform: uppercase;

    @media screen and (max-width:1024px){
        font-size: 3vw;
        text-align: center;
    }

    @media screen and (max-width:768px){
        font-size: 3vw;
    }

    @media screen and (max-width:468px){
        font-size: 5vw;
    }


`


export const Container = styled.div`
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: auto;
    margin-top: 10vh;
    margin-bottom: 0vh;
    margin-left: 35vh;
    margin-right: 35vh;

    @media screen and (max-width:1224px){
        margin-top: 10vh;
        margin-bottom: 0vh;
        margin-left: 15vh;
        margin-right: 15vh;
    }

    @media screen and (max-width:1024px){
        margin-top: 10vh;
        margin-bottom: 0vh;
        margin-left: 15vh;
        margin-right: 15vh;
    }

    @media screen and (max-width:768px){
        margin-top: 10vh;
        margin-bottom: 0vh;
        margin-left: 5vh;
        margin-right: 5vh;
    }

    @media screen and (max-width:468px){
        margin-top: 10vh;
        margin-bottom: 0vh;
        margin-left: 5vh;
        margin-right: 5vh;
    }
`


export const PandaH1v2 = styled.h1`
    font-family: panda;
    font-size: 3vw;
    color: #534741;
    padding-bottom: 2vh;
    text-transform: uppercase;
    text-align: center;

    @media screen and (max-width:1024px){
        font-size: 3vw;
        text-align: center;
    }

    @media screen and (max-width:768px){
        font-size: 3vw;
    }

    @media screen and (max-width:468px){
        font-size: 5vw;
    }


`

export const MintH1 = styled.h1`
    font-family: panda;
    font-size: 2vh;
    color: #fff;
    text-align: center;

    @media screen and (max-width:1024px){
        font-size: 1.5vh;
    }
`

export const MintDetails = styled.h1`
    font-family: system-ui,-apple-system,BlinkMacSystemFont,segoe ui,Roboto,Oxygen,Ubuntu,Cantarell,fira sans,droid sans,helvetica neue,sans-serif;
    font-size: 3vh;
    color: #fff;
    text-align: center;

    @media screen and (max-width:1024px){
        font-size: 2vh;
    }
`

export const PandaP = styled.p`
    font-family: roboto;
    font-size: 3vh;
    color: #534741;


    @media screen and (max-width:768px){
        font-size: 2vh;
        text-align: center;
    }

    @media screen and (max-width:468px){
        font-size: 2vh;
    }
`

export const PandaP2 = styled.p`
    font-family: roboto;
    font-size: 3vh;
    color: #534741;
    text-align: center;

    @media screen and (max-width:1024px){
     
        text-align: center;
    }

    @media screen and (max-width:768px){
        font-size: 2vh;
        text-align: center;
    }

    @media screen and (max-width:468px){
        font-size: 2vh;
    }
`

export const PandaFlexContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const PandaColumnContent = styled.div`
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const Img = styled.img`
 
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;

    @media screen and (max-width:1024px){
        width: 100%;
    }
`

export const PandaPFlexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: space-between;
    width: auto;
    position: relative;
    top: 15vh;
    width: auto;
    z-index: 2;

    @media screen and (max-width:1024px){
        flex-wrap: wrap;
        justify-content: center;
        align-content: space-between;
        width: auto;  
        top: 10vh;
    }
    
    @media screen and (max-width:768px){
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-between;
        width: auto;
        top: 10vh;
        padding-left: 5vh;
        padding-right: 5vh;
    }

    @media screen and (max-width:553px){
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-between;
        width: auto;
        top: 5vh;
        padding-left: 0vh;
        padding-right: 0vh;
    }

    @media screen and (max-width:468px){
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-between;
        width: auto;
        top: 5vh;
        padding-left: 10vh;
        padding-right: 10vh;
    }
`

export const PandaPContent = styled.div`
    flex-wrap: wrap;
    justify-content: center;
    background-color: #534741;
    padding: 2vh;
    border-radius: 10px;
    margin: 1vh;
`


export const Img1 = styled.img`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vw;
    width: auto;
   
    

    @media screen and (max-width:1629px){
        height: 20vw;
    }

    @media screen and (max-width:1366px){
        height: 15vw;
        
    }

    @media screen and (max-width:1024px){
        height: 40vw;
    }

    @media screen and (max-width:768px){
        height: 50vw;
    }

    @media screen and (max-width:468px){
        height: 60vw;
    }
`
