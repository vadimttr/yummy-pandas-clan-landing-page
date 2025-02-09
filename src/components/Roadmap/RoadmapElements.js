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
    height: 1080px;
    position: relative;
    z-index: 1;
    align-items: center;
    overflow-x: scroll;
    /*padding: 5vh 0vh;*/
    overflow-y: hidden;
    background-image: url("${newBg}");
    width: auto;
    white-space: nowrap;

    @media screen and (max-width:468px){
        height: 850px;
    }
`

export const FloorBg = styled.img`
    width: 10323.8px;
    height: 115.2px;
    position: absolute;
    bottom: 0px;
    min-height: 0px;

    @media screen and (max-width:821px){
        height: 94.4px;
        width: 7921.2px;
    }

    @media screen and (max-width:468px){
        height: 54.9px;
        width: 2106px;
    }
`

export const Mountain1 = styled.img`
    position: absolute;
    bottom: 75.6px;
    left: 0px;
    width: 1152.0px;

    @media screen and (max-width:1024px){
        width: 1536.0px;
    }

    @media screen and (max-width:821px){
        display: flex;
        width: 984.0px;
    }

    @media screen and (max-width:468px){
        width: 585.0px;
        bottom: 50.6px;
    }
`

export const Mountain2 = styled.img`
    position: absolute;
    bottom: 0.0px;
    left: 633.6px;
    width: 1612.8px;

    @media screen and (max-width:821px){
        display: flex;
        left: 861.0px;
        width: 1640.0px;
        bottom: 35.4px;
    }

    @media screen and (max-width:468px){
        width: 643.5px;
        bottom: 50.6px;
        left: 234.0px;
    }
`

export const Mountain3 = styled.img`
    position: absolute;
    bottom: 0.0px;
    left: 2227.2px;
    width: 1612.8px;

    @media screen and (max-width:821px){
        display: flex;
        left: 2460.0px;
        width: 1640.0px;
        bottom: 35.4px;
    }

    @media screen and (max-width:468px){
        display: none;
    }
`

export const Mountain4 = styled.img`
    position: absolute;
    bottom: 0px;
    left: 3667.2px;
    width: 1612.8px;

    @media screen and (max-width:821px){
        display: none;
    }

    @media screen and (max-width:468px){
        display: none;
    }
`

export const Mountain5 = styled.img`
    position: absolute;
    bottom: 0px;
    left: 4492.8px;
    width: 1632.0px;

    @media screen and (max-width:821px){
        display: flex;
        left: 2730.6px;
        width: 1640.0px;
        bottom: 35.4px;
    }

    @media screen and (max-width:468px){
        left: 468.0px;
        width: 780px;
    }
`

export const Cloud1 = styled.img`
    position: absolute;
    bottom: 64.8px;
    left: 0px;
    width: 2880.0px;

    @media screen and (max-width:821px){
        width: 1230.0px;
        left: 0.0px;
    }

    @media screen and (max-width:468px){
        width: 780.0px;
        bottom: 42.2px;
    }
`

export const Cloud2 = styled.img`
    position: absolute;
    bottom: 64.8px;
    left: 192.0px;
    width: 1152.0px;

    @media screen and (max-width:821px){
        width: 1230.0px;
        left: 762.6px;
    }

    @media screen and (max-width:468px){
        width: 585.0px;
        bottom: 42.2px;
        left: 292.5px;
    }
`

export const Cloud3 = styled.img`
    position: absolute;
    bottom: 64.8px;
    left: 0.0px;
    width: 1574.4px;

    @media screen and (max-width:821px){
        width: 1640.0px;
        left: 0.0px;
        bottom: 118.0px;
    }

    @media screen and (max-width:468px){
        width: 585.0px;
        bottom: 42.2px;
        left: 663.0px;
    }
`

export const Cloud4 = styled.img`
    position: absolute;
    bottom: 64.8px;
    left: 1248.0px;
    opacity: 0.5;
    transform: scaleX(-1);

    @media screen and (max-width:821px){
        width: 1640.0px;
        left: 1066.0px;
        bottom: 70.8px;
    }

    @media screen and (max-width:468px){
        bottom: 253.2px;
        transform: scaleY(-1);
        width: 195.0px;
        left: 0px;
    }
`

export const Cloud5 = styled.img`
    position: absolute;
    bottom: 64.8px;
    left: 3648.0px;
    opacity: 0.5;

    @media screen and (max-width:821px){
        width: 1640.0px;
        left: 2706.0px;
        bottom: 70.8px;
    }

    @media screen and (max-width:468px){
        display: none;
    }
`

export const Cloud6 = styled.img`
    position: absolute;
    bottom: 64.8px;
    left: 3715.2px;
    opacity: 0.5;
    transform: scaleX(-1);

    @media screen and (max-width:821px){
        width: 1640.0px;
        left: 2730.6px;
        bottom: 70.8px;
    }

    @media screen and (max-width:468px){
        width: 585.0px;
        bottom: 42.2px;
        left: 663.0px;
    }
`

export const Cloud7 = styled.img`
    position: absolute;
    bottom: 64.8px;
    left: 4358.4px;
    width: 1766.4px;

    @media screen and (max-width:821px){
        width: 1640.0px;
        left: 1640.0px;
        bottom: 212.4px;
    }

    @media screen and (max-width:468px){
        display: none;
    }
`

export const Cloud8 = styled.img`
    display: flex;
    position: absolute;
    bottom: 64.8px;
    left: 1566.7px;
    width: 1574.4px;
    transform: scaleX(-1);

    @media screen and (max-width:821px){
        display: none;
    }

    @media screen and (max-width:468px){
        display: none;
    }
`

export const Cloud9 = styled.img`
    position: absolute;
    bottom: 64.8px;
    left: 2961.8px;
    width: 1574.4px;
    transform: scaleX(0.781);

    @media screen and (max-width:821px){
        display: flex;
        left: 2689.6px;
        bottom: 118.0px;
        width: 1886.0px;
    }

    @media screen and (max-width:468px){
        display: none;
    }
`

export const Floor1 = styled.img`
    position: absolute;
    bottom: 0px;
    left: 0.0px;
    width: 1248.0px;

    @media screen and (max-width:1024px){
        width: 2304.0px;
    }

    @media screen and (max-width:821px){
        width: 975px;
    }

    @media screen and (max-width:468px){
        width: 585.0px;
    }
`

export const Floor2 = styled.img`
    position: absolute;
    bottom: 0px;
    left: 460.8px;
    width: 1248.0px;

    @media screen and (max-width:1024px){
        width: 2304.0px;
        left: 864.0px;
    }

    @media screen and (max-width:821px){
        width: 975px;
        left: 370px;
    }

    @media screen and (max-width:468px){
        width: 585.0px;
        left: 214.5px;
    }
`

export const Floor3 = styled.img`
    position: absolute;
    bottom: 0px;
    left: 1363.2px;
    width: 1248.0px;

    @media screen and (max-width:1024px){
        width: 2304.0px;
        left: 2553.6px;
    }

    @media screen and (max-width:821px){
        width: 975px;
        left: 1080px;
    }

    @media screen and (max-width:468px){
        width: 585.0px;
        left: 448.5px;
    }
`

export const Floor4 = styled.img`
    position: absolute;
    bottom: 0px;
    left: 2265.6px;
    width: 1248.0px;

    @media screen and (max-width:1024px){
        width: 2304.0px;
        left: 4243.2px;
    }

    @media screen and (max-width:821px){
        width: 975px;
        left: 1790px;
    }

    @media screen and (max-width:468px){
        display: none;
    }
`

export const Floor5 = styled.img`
    position: absolute;
    bottom: 0px;
    left: 3168.0px;
    width: 1248.0px;

    @media screen and (max-width:1024px){
        width: 2304.0px;
        left: 5932.8px;
    }

    @media screen and (max-width:821px){
        width: 975px;
        left: 2500px;
    }

    @media screen and (max-width:468px){
        display: none;
    }
`

export const Floor6 = styled.img`
    position: absolute;
    bottom: 0px;
    left: 4070.4px;
    width: 1248.0px;

    @media screen and (max-width:1024px){
        width: 2304.0px;
        left: 7622.4px;
    }

    @media screen and (max-width:821px){
        width: 975px;
        left: 3210px;
    }

    @media screen and (max-width:468px){
        display: none;
    }
`

export const Floor7 = styled.img`
    position: absolute;
    bottom: 0px;
    left: 4992.0px;
    width: 1128.0px;

    @media screen and (max-width:1024px){
        width: 2016.0px;
        left: 9312.0px;
    }

    @media screen and (max-width:821px){
        width: 864px;
        left: 3507px;
    }

    @media screen and (max-width:468px){
        width: 526.5px;
        left: 721.5px;
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
    padding-left: 54.0px;
    padding-right: 54.0px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Tree = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    width: 960.0px;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 1344.0px;
    }

    @media screen and (max-width:821px){
        width: 821.0px;
    }

    @media screen and (max-width:468px){
        width: 468.0px;
    }
`

export const SGN1 = styled.img`
    position: absolute;
    bottom: 2px;
    left: 10.8px;
    width: 806.4px;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 576.0px;
        left: 4224.0px;
    }

    @media screen and (max-width:821px){
        left: 0;
        width: 656.0px;
    }

    @media screen and (max-width:468px){
        width: 390.0px;
        left: 0px;
    }
`

export const SGN2 = styled.img`
    position: absolute;
    bottom: 2px;
    left: 16.2px;
    width: 1056.0px;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 576.0px;
        left: 2376.0px;
    }

    @media screen and (max-width:821px){
        left: 0;
        width: 902.0px;
    }

    @media screen and (max-width:468px){
        width: 526.5px;
        left: 0.0px;
    }
`

export const SGN2TXT = styled.h1`
    position: absolute;
    left: 2745.6px;
    bottom: 253.8px;
    color: white;
    font-size: 40px;
    font-family: orbitron;

    @media screen and (max-width:821px){
        bottom: 224.2px;
        left: 1722.0px;
    }

    @media screen and (max-width:468px){
        left: 643.5px;
        bottom: 101.3px;
        font-size: 25px;
    }
`

export const SGN1TXT = styled.h1`
    position: absolute;
    left: 163.2px;
    bottom: 280.8px;
    color: white;
    font-size: 40px;
    font-family: orbitron;

    @media screen and (max-width:821px){
        bottom: 224.2px;
        left: 123.0px;
    }

    @media screen and (max-width:468px){
        left: 70.2px;
        bottom: 129.1px;
        font-size: 25px;
    }
`

export const PNB2 = styled.img`
    position: absolute;
    bottom: 2px;
    left: 475.2px;
    width: 403.2px;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 576.0px;
        left: 2376.0px;
    }

    @media screen and (max-width:821px){
        left: 328.0px;
        width: 328.0px;
    }

    @media screen and (max-width:468px){
        width: 195.0px;
        left: 156.0px;
    }
`

export const STP1 = styled.img`
    position: absolute;
    bottom: 648.0px;
    left: 993.6px;
    width: 422.4px;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 576.0px;
        left: 2376.0px;
    }

    @media screen and (max-width:821px){
        left: 328.0px;
        width: 369.0px;
        bottom: 767.0px;
    }

    @media screen and (max-width:468px){
        width: 253.5px;
        left: 46.8px;
        bottom: 633.0px;
    }
`

export const STP2 = styled.img`
    position: absolute;
    bottom: 648.0px;
    left: 1479.6px;
    width: 422.4px;
    height: auto;
    overflow: hidden;
    z-index: 1;

    @media screen and (max-width:1024px){
        width: 576.0px;
        left: 2376.0px;
    }

    @media screen and (max-width:821px){
        left: 738.0px;
        width: 369.0px;
        bottom: 767.0px;
    }

    @media screen and (max-width:468px){
        width: 253.5px;
        left: 46.8px;
        bottom: 438.9px;
    }
`

export const STP3 = styled.img`
    position: absolute;
    bottom: 648.0px;
    left: 1965.6px;
    width: 422.4px;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 576.0px;
        left: 2376.0px;
    }

    @media screen and (max-width:821px){
        left: 1148.0px;
        width: 369.0px;
        bottom: 767.0px;
    }

    @media screen and (max-width:468px){
        width: 253.5px;
        left: 46.8px;
        bottom: 244.8px;
    }
`

export const STP4 = styled.img`
    position: absolute;
    bottom: 270.0px;
    left: 1123.2px;
    width: 422.4px;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 576.0px;
        left: 2376.0px;
    }

    @media screen and (max-width:821px){
        left: 426.4px;
        width: 369.0px;
        bottom: 436.6px;
    }

    @media screen and (max-width:468px){
        width: 253.5px;
        left: 331.5px;
        bottom: 633.0px;
    }
`

export const STP5 = styled.img`
    position: absolute;
    bottom: 270.0px;
    left: 1609.2px;
    width: 422.4px;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 576.0px;
        left: 2376.0px;
    }

    @media screen and (max-width:821px){
        left: 836.4px;
        width: 369.0px;
        bottom: 436.6px;
    }

    @media screen and (max-width:468px){
        width: 253.5px;
        left: 331.5px;
        bottom: 438.9px;
    }
`

export const STP6 = styled.img`
    position: absolute;
    bottom: 270.0px;
    left: 2095.2px;
    width: 422.4px;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 576.0px;
        left: 2376.0px;
    }

    @media screen and (max-width:821px){
        left: 1246.4px;
        width: 369.0px;
        bottom: 436.6px;
    }

    @media screen and (max-width:468px){
        width: 253.5px;
        left: 331.5px;
        bottom: 244.8px;
    }
`

export const SGN3 = styled.img`
    position: absolute;
    bottom: 2px;
    left: 2052.0px;
    width: 1728.0px;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 576.0px;
        left: 2376.0px;
    }

    @media screen and (max-width:821px){
        left: 943.0px;
        width: 1640.0px;
    }

    @media screen and (max-width:468px){
        width: 760.5px;
        left: 280.8px;
    }
`

export const PNB3 = styled.img`
    position: absolute;
    bottom: 27.0px;
    left: 2754.0px;
    width: 672.0px;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 576.0px;
        left: 2376.0px;
    }

    @media screen and (max-width:821px){
        left: 1640.0px;
        width: 533.0px;
    }

    @media screen and (max-width:468px){
        width: 300.3px;
        left: 585.0px;
        bottom: 16.9px;
    }
`

export const STP7 = styled.img`
    position: absolute;
    bottom: 648.0px;
    left: 3585.6px;
    width: 422.4px;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 576.0px;
        left: 2376.0px;
    }

    @media screen and (max-width:821px){
        left: 1968.0px;
        width: 369.0px;
        bottom: 767.0px;
    }

    @media screen and (max-width:468px){
        width: 253.5px;
        left: 690.3px;
        bottom: 633.0px;
    }
`

export const STP8 = styled.img`
    position: absolute;
    bottom: 648.0px;
    left: 4071.6px;
    width: 422.4px;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 576.0px;
        left: 2376.0px;
    }

    @media screen and (max-width:821px){
        left: 2378.0px;
        width: 369.0px;
        bottom: 767.0px;
    }

    @media screen and (max-width:468px){
        width: 253.5px;
        left: 690.3px;
        bottom: 438.9px;
    }
`

export const STP9 = styled.img`
    position: absolute;
    bottom: 648.0px;
    left: 4557.6px;
    width: 422.4px;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 576.0px;
        left: 2376.0px;
    }

    @media screen and (max-width:821px){
        left: 2788.0px;
        width: 369.0px;
        bottom: 767.0px;
    }

    @media screen and (max-width:468px){
        width: 253.5px;
        left: 690.3px;
        bottom: 244.8px;
    }
`

export const STP10 = styled.img`
    position: absolute;
    bottom: 270.0px;
    left: 3715.2px;
    width: 422.4px;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 576.0px;
        left: 2376.0px;
    }

    @media screen and (max-width:821px){
        left: 2066.4px;
        width: 369.0px;
        bottom: 436.6px;
    }

    @media screen and (max-width:468px){
        width: 253.5px;
        left: 975.0px;
        bottom: 633.0px;
    }
`

export const STP11 = styled.img`
    position: absolute;
    bottom: 270.0px;
    left: 4201.2px;
    width: 422.4px;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 576.0px;
        left: 2376.0px;
    }

    @media screen and (max-width:821px){
        left: 2476.4px;
        width: 369.0px;
        bottom: 436.6px;
    }

    @media screen and (max-width:468px){
        width: 253.5px;
        left: 975.0px;
        bottom: 438.9px;
    }
`

export const STP12 = styled.img`
    position: absolute;
    bottom: 270.0px;
    left: 4687.2px;
    width: 422.4px;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 576.0px;
        left: 2376.0px;
    }

    @media screen and (max-width:821px){
        left: 2886.4px;
        width: 369.0px;
        bottom: 436.6px;
    }

    @media screen and (max-width:468px){
        width: 253.5px;
        left: 975.0px;
        bottom: 244.8px;
    }
`

export const PNB = styled.img`
    position: absolute;
    bottom: 0;
    left: 6102.0px;
    width: 326.4px;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 576.0px;
        left: 2376.0px;
    }

    @media screen and (max-width:821px){
        left: 4018.0px;
        width: 328.0px;
    }

    @media screen and (max-width:468px){
        width: 175.5px;
        left: 690.3px;
        bottom: 8.4px;
        display: none;
    }
`

export const PNB4 = styled.img`
    position: absolute;
    bottom: 0;
    left: 5832.0px;
    width: 230.4px;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 576.0px;
        left: 2376.0px;
    }

    @media screen and (max-width:821px){
        left: 3788.4px;
        width: 205.0px;
    }

    @media screen and (max-width:468px){
        width: 109.2px;
        left: 1053.0px;
        bottom: 8.4px;
    }
`

export const GZB = styled.img`
    position: absolute;
    bottom: 0.0px;
    left: 5076.0px;
    width: 1056.0px;
    height: auto;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: 576.0px;
        left: 2376.0px;
    }

    @media screen and (max-width:821px){
        display: flex;
        left: 3157.0px;
        width: 943.0px;
    }

    @media screen and (max-width:468px){
        width: 234.0px;
        display: none;
    }
`

export const RoadmapRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const RoadmapColumn = styled.div`
    padding: 0.0px;
`

export const FlexboxRoadmapContainer = styled.div`
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: space-between;
    padding: 0.0px;
    left: 0.0px;

`

export const ColumnContent = styled.div`
    display: flex;
    justify-content: center;
    height: auto;

`

export const ColumnContent2 = styled.div`
    display: flex;
    align-items: center;
    padding: 0.0px;
    width: 1344.0px;

    @media screen and (max-width:468px){
        width: 117.0px;
    }
`

export const Img = styled.img`
    position: relative;
    height: 648.0px;
    width: auto;
    display: flex;
    justify-content: center;
    align-self: center;
`