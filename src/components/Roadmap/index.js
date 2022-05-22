import React from 'react'
import { RoadmapContainer, NewBg, RoadmapBg, RoadmapContent,
  RoadmapRow, RoadmapColumn, FlexboxRoadmapContainer,
  ColumnContent, ColumnContent2, Mountain1, 
  Mountain2, Mountain3, Mountain4, Mountain5, Cloud1, Cloud2, 
  Cloud3, Cloud4, Cloud5, Cloud6, Cloud7, Floor1, Floor2, Floor3,
  Floor4, Floor5, Floor6, Floor7, FloorBg, Img, Tree, SGN1, SGN2, PNB2, STP1, STP2, STP3, STP4, STP5, STP6, SGN3, SGN2TXT, SGN1TXT, PNB3, PNB4, STP7, STP8, STP9, STP10, STP11, STP12, GZB, PNB, Cloud8, Cloud9} from './RoadmapElements'
//import img from '../../image/roadmap.png'
//import picture from '../../image/pandatreeroadmap.PNG'
import pnb from '../../image/pnb.PNG'
import rmbg from '../../image/roadmap/Rectangle-26.png'
import mt1 from '../../image/roadmap/IMG_3526.png'
import mt2 from '../../image/roadmap/IMG_3524(1).png'
import mt3 from '../../image/roadmap/IMG_3524.png'
import mt4 from '../../image/roadmap/IMG_3524(2).png'
import mt5 from '../../image/roadmap/IMG_3528.png'
import cloud1 from '../../image/roadmap/IMG_3527.png'
import cloud2 from '../../image/roadmap/IMG_3525.png'
import cloud3 from '../../image/roadmap/IMG_3523.png'
import floor1 from '../../image/roadmap/IMG_3494 2.png'
import floor2 from '../../image/roadmap/IMG_3494 1.png'
import floor3 from '../../image/roadmap/IMG_3494 10.png'
import floorBg from '../../image/roadmap/Rectangle 20.png'
import sgn1 from '../../image/roadmap/Table 2 1.png'
import sgn2 from '../../image/roadmap/Table 1 1.png'
import pnb2 from '../../image/roadmap/Panda with a map  2.png'
import stp1 from '../../image/roadmap/rd1.png'
import stp2 from '../../image/roadmap/rd2.png'
import stp3 from '../../image/roadmap/rd3.png'
import stp4 from '../../image/roadmap/rd4.png'
import stp5 from '../../image/roadmap/rd5.png'
import stp6 from '../../image/roadmap/rd6.png'
import stp7 from '../../image/roadmap/rd7.png'
import stp8 from '../../image/roadmap/rd8.png'
import stp9 from '../../image/roadmap/rd9.png'
import stp10 from '../../image/roadmap/rd10.png'
import stp11 from '../../image/roadmap/rd11.png'
import stp12 from '../../image/roadmap/rd12.png'
import sgn3 from '../../image/roadmap/Table 1 2.png'
import pnb3 from '../../image/roadmap/fire-pand 1.png'
import gzb from '../../image/roadmap/IMG_3540 1.png'
import pnb4 from '../../image/roadmap/IMG_3539 1.png'

const Roadmap = () => { 
  return (
    <RoadmapContainer id='roadmap'>
      
      <Cloud8 src={cloud3}></Cloud8>
      <Cloud9 src={cloud3}></Cloud9>
      <Mountain2 src={mt2}></Mountain2>
      <Cloud2 src={cloud2}></Cloud2>
      <Cloud3 src={cloud3}></Cloud3>
      <Mountain1 src={mt1}></Mountain1>
      <Cloud1 src={cloud1}></Cloud1>
      <Mountain3 src={mt3}></Mountain3>
      <Mountain4 src={mt4}></Mountain4>
      <Cloud7 src={cloud3}></Cloud7>
      <Mountain5 src={mt5}></Mountain5>
      <Cloud4 src={cloud1}></Cloud4>
      <Cloud5 src={cloud1}></Cloud5>
      <Cloud6 src={cloud1}></Cloud6>
      <FloorBg src={floorBg}></FloorBg>
      <Floor2 src={floor2}></Floor2>
      <Floor1 src={floor1}></Floor1>
      <Floor3 src={floor2}></Floor3>
      <Floor4 src={floor2}></Floor4>
      <Floor5 src={floor2}></Floor5>
      <Floor6 src={floor2}></Floor6>
      <Floor7 src={floor3}></Floor7>
      <RoadmapBg></RoadmapBg>
      <SGN2 src={sgn2}></SGN2>
      <SGN1 src={sgn1}></SGN1>
      <PNB2 src={pnb2}></PNB2>
      <STP1 src={stp1}></STP1>
      <STP2 src={stp2}></STP2>
      <STP3 src={stp3}></STP3>
      <STP4 src={stp4}></STP4>
      <STP5 src={stp5}></STP5>
      <STP6 src={stp6}></STP6>
      <SGN3 src={sgn3}></SGN3>
      <PNB3 src={pnb3}></PNB3>
      <STP7 src={stp7}></STP7>
      <STP8 src={stp8}></STP8>
      <STP9 src={stp9}></STP9>
      <STP10 src={stp10}></STP10>
      <STP11 src={stp11}></STP11>
      <STP12 src={stp12}></STP12>
      
      <GZB src={gzb}></GZB>
      <PNB4 src={pnb4}></PNB4>
      <SGN1TXT>V1</SGN1TXT>
      <SGN2TXT>V2</SGN2TXT>
      <RoadmapContent>
        <RoadmapRow>
          <RoadmapColumn>
            <FlexboxRoadmapContainer>

              <ColumnContent>
              </ColumnContent>

              <ColumnContent2>
                
              </ColumnContent2>
            </FlexboxRoadmapContainer>
          </RoadmapColumn>
        </RoadmapRow>
      </RoadmapContent>
    </RoadmapContainer>
  )
}

/*
const Roadmap = () => { 
  return (
    <RoadmapContainer id='roadmap'>
      <NewBg src={rmbg}></NewBg>
      <RoadmapBg>
      
      </RoadmapBg>

      <Tree src={picture}></Tree>
      <PNB src={pnb}></PNB>
      <RoadmapContent>
        <RoadmapRow>
          <RoadmapColumn>
            <FlexboxRoadmapContainer>

              <ColumnContent>
                <RoadmapH1>ROADMAP</RoadmapH1>
              </ColumnContent>

              <ColumnContent2>
                <Img src={img}/>
              </ColumnContent2>
            </FlexboxRoadmapContainer>
          </RoadmapColumn>
        </RoadmapRow>
      </RoadmapContent>
    </RoadmapContainer>
  )
}
*/

export default Roadmap