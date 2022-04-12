import React from 'react'
import { RoadmapContainer, RoadmapBg, RoadmapContent,
  RoadmapRow, RoadmapColumn, FlexboxRoadmapContainer,
  ColumnContent, ColumnContent2, RoadmapH1, Img, Tree} from './RoadmapElements'
import img from '../../image/roadmap.png'
import picture from '../../image/pandatreeroadmap.PNG'


const Roadmap = () => { 
  return (
    <RoadmapContainer id='roadmap'>
      <RoadmapBg>
      
      </RoadmapBg>

      <Tree src={picture}></Tree>
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

export default Roadmap