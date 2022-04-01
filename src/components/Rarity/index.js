import React from 'react'
import { RarityContainer, RarityBg, RarityContent,
    RarityRow, RarityColumn, FlexboxRarityContainer,
    ColumnContent, ColumnContent2, RarityP, Img, RarityH1,
    ImgAnim, FlexContainer, ImgWrapper,
     } from './RarityElements'
import img1 from '../../image/rarity/1.png'
import img2 from '../../image/rarity/2.png'
import img3 from '../../image/rarity/3.png'
import img4 from '../../image/rarity/4.png'
import img5 from '../../image/rarity/5.png'
import img6 from '../../image/rarity/6.png'
import img7 from '../../image/rarity/7.png'
import img8 from '../../image/rarity/8.png'
import gif from '../../image/svganimation.GIF'
import Flip from 'react-reveal/Flip';

const Rarity = () => {
  return (
    <RarityContainer id='rarity'>
        <RarityBg>

        </RarityBg>

        <RarityContent>
            <RarityRow>
                <RarityColumn>
                        <RarityH1>
                            HOW COOL IS MY YUMMY PANDA?
                        </RarityH1>
                    <FlexboxRarityContainer>
                        <ColumnContent> 

                            
                            <RarityP>
                            Every Yummy Panda has a few things in common. All hand-drawn with love, all on Ethereum, all cool.

                            But some are cooler than others… and others are downright legendary!

                            Each Yummy Panda has up to 4 traits. Some are common, like a tank top or sunglasses. Other traits, like a UFO or dinosaur outfit, don’t come around so often - our Yummy Pandas have searched the multiverse to find them and now hold them with pride.

                            This unique combination of traits creates 8 different rarity levels. The rarer your Yummy Panda is, the more BMB you can earn through staking.

                            </RarityP>
                        </ColumnContent>
                            
                        <ColumnContent2>
                            <ImgAnim src={gif} />
                        </ColumnContent2>
                    </FlexboxRarityContainer>
                    
                    <FlexContainer>
                        
                        <Flip top>
                        <ImgWrapper>
                            <Img src={img8} />
                        </ImgWrapper>
                        </Flip>

                        <Flip top>
                        <ImgWrapper>
                            <Img src={img7} />
                        </ImgWrapper>
                        </Flip>
                        
                    
                        <Flip top>
                        <ImgWrapper>
                            <Img src={img6} />
                        </ImgWrapper>
                        </Flip>
                        

                        <Flip top>
                        <ImgWrapper>
                            <Img src={img5} />
                        </ImgWrapper>
                        </Flip>
                       
                    
                        <Flip top>
                        <ImgWrapper>
                            <Img src={img4} />
                        </ImgWrapper>
                        </Flip>
                       

                        <Flip top>
                        <ImgWrapper>
                            <Img src={img3} />
                        </ImgWrapper>
                        </Flip>
                        
                    
                        <Flip top>
                        <ImgWrapper>
                            <Img src={img2} />
                        </ImgWrapper>
                        </Flip>
                        

                        <Flip top>
                        <ImgWrapper>
                            <Img src={img1} />
                        </ImgWrapper>
                        </Flip>
                        
                    </FlexContainer>


                </RarityColumn>
            </RarityRow>
        </RarityContent>
    </RarityContainer>
  )
}

export default Rarity