import React from 'react'
import { RarityContainer, RarityBg, RarityContent,
    RarityRow, RarityColumn, FlexboxRarityContainer,
    ColumnContent, ColumnContent2, RarityP, Img, RarityH1,
    ImgAnim, FlexContainer, ImgWrapper,
     } from './RarityElements'
import img from '../../image/500x500.jpg'
import gif from '../../image/svganimation.GIF'

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

                            <RarityH1>
                            How Cool is my Panda?
                            </RarityH1>
                            <RarityP>
                            All Pandas are hand-drawn with love and care, and all are cool, but some are cooler than others….and some are just bamboo. Each Panda can have up to 4 traits, from 8 different rarities. Common items like a tank top or sunglasses are less rare, while a UFO or dinosaur outfit is rarer. The rarity of a Panda determines how many $PND it can earn through staking.
                            </RarityP>
                        </ColumnContent>
                            
                        <ColumnContent2>
                            <ImgAnim src={gif} />
                        </ColumnContent2>
                    </FlexboxRarityContainer>
                    
                    <FlexContainer>
                        
                        <ImgWrapper>
                            <Img src={img} />
                        </ImgWrapper>

                        <ImgWrapper>
                            <Img src={img} />
                        </ImgWrapper>

                        <ImgWrapper>
                            <Img src={img} />
                        </ImgWrapper>

                        <ImgWrapper>
                            <Img src={img} />
                        </ImgWrapper>

                        <ImgWrapper>
                            <Img src={img} />
                        </ImgWrapper>

                        <ImgWrapper>
                            <Img src={img} />
                        </ImgWrapper>

                        <ImgWrapper>
                            <Img src={img} />
                        </ImgWrapper>

                        <ImgWrapper>
                            <Img src={img} />
                        </ImgWrapper>
                    </FlexContainer>


                </RarityColumn>
            </RarityRow>
        </RarityContent>
    </RarityContainer>
  )
}

export default Rarity