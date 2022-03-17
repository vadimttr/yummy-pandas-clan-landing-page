import React from 'react'
import { RarityContainer, RarityBg, RarityContent,
    RarityRow, RarityColumn, FlexboxRarityContainer,
    ColumnContent, ColumnContent2, RarityP, Img,
     } from './RarityElements'
import img from '../../image/500x500.jpg'
const Rarity = () => {
  return (
    <RarityContainer>
        <RarityBg>

        </RarityBg>

        <RarityContent>
            <RarityRow>
                <RarityColumn>
                    <FlexboxRarityContainer>
                        <ColumnContent> 
                            <RarityP>
                                Skyshare Systems is a blockchain company that specializes in creating Smart Contracts on the 
                                Ethereum, BSC, Polygon, and Chronos Networks. We develop startup projects by creating stunning Dapps, through the use of the leading technology and Web3. We support you step-by-step of blockchain adoption, design thinking, evaluation, and assessment of blockchain solutions to accelerate your enterprise blockchain deployments.
                            </RarityP>
                        </ColumnContent>
                            
                        <ColumnContent2>
                            <Img src={img} />
                        </ColumnContent2>
                    </FlexboxRarityContainer>
                    
                    <FlexboxRarityContainer>
                   
                        <ColumnContent2>
                            <Img src={img} />
                        </ColumnContent2>
                   
                        <ColumnContent2>
                            <Img src={img} />
                        </ColumnContent2>
                   
                        <ColumnContent2>
                            <Img src={img} />
                        </ColumnContent2>
                   
                        <ColumnContent2>
                            <Img src={img} />
                        </ColumnContent2>
                   
                      
                    </FlexboxRarityContainer>

                    <FlexboxRarityContainer>
                   
                        <ColumnContent2>
                            <Img src={img} />
                        </ColumnContent2>
                    
                        <ColumnContent2>
                            <Img src={img} />
                        </ColumnContent2>
                    
                        <ColumnContent2>
                            <Img src={img} />
                        </ColumnContent2>
                    
                        <ColumnContent2>
                            <Img src={img} />
                        </ColumnContent2>
              
                 
                    </FlexboxRarityContainer>

                </RarityColumn>
            </RarityRow>
        </RarityContent>
    </RarityContainer>
  )
}

export default Rarity