import React from 'react'
import { TeamContainer, TeamBg, TeamContent,
    TeamRow, TeamColumn, FlexboxTeamContainer,
    ColumnContent, Img, TeamH1 } from './TeamElements'
import img from '../../image/asd.jpeg'
const Team = () => {
  return (
    <TeamContainer>
        <TeamBg>

        </TeamBg>

        <TeamContent>
            <TeamRow>
                <TeamColumn>
                    <FlexboxTeamContainer>
                        <ColumnContent>
                        
                            <Img src={img} className="teamImg" />
                       
                           
                            <TeamH1>Name</TeamH1>
                        </ColumnContent>

                        
                        <ColumnContent>
                            <Img src={img} />
                            <TeamH1>Name</TeamH1>
                        </ColumnContent>

                        <ColumnContent>
                            <Img src={img} />
                            <TeamH1>Name</TeamH1>
                        </ColumnContent>

                        <ColumnContent>
                            <Img src={img} />
                            <TeamH1>Name</TeamH1>
                        </ColumnContent>

                    </FlexboxTeamContainer>

                    <FlexboxTeamContainer>
                        <ColumnContent>
                            <Img src={img} />
                            <TeamH1>Name</TeamH1>
                        </ColumnContent>

                        
                        <ColumnContent>
                            <Img src={img} />
                            <TeamH1>Name</TeamH1>
                        </ColumnContent>

                        <ColumnContent>
                            <Img src={img} />
                            <TeamH1>Name</TeamH1>
                        </ColumnContent>

                        <ColumnContent>
                            <Img src={img} />
                            <TeamH1>Name</TeamH1>
                        </ColumnContent>

                    </FlexboxTeamContainer>
                </TeamColumn>
            </TeamRow>
        </TeamContent>
    </TeamContainer>
  )
}

export default Team