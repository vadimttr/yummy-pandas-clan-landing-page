import React from 'react'
import { PandaContainer, PandaBg, PandaContent, PandaRow,
    PandaColumn, FlexboxPandaContainer, ColumnContent, ColumnContent2,
    PandaH1, PandaH1v2, PandaP,PandaP2, PandaFlexContainer,PandaColumnContent, Img, Img1,
    PandaPFlexContainer, PandaPContent, MintH1, MintDetails} from './PandapriceElements'
import img from '../../image/fillerv2.png'
import img1 from '../../image/yummyabout.png'
import Bounce from 'react-reveal/Bounce';

const Pandaprice = () => {
  return (
    <PandaContainer>
        <PandaBg>

        </PandaBg>

        <PandaContent>
            <PandaRow>
                <PandaColumn>
                    <FlexboxPandaContainer>
                        <ColumnContent>
                            <PandaH1>
                                Why should you acquire panda?
                            </PandaH1>

                            <Bounce>
                            <ColumnContent2>
                                <Img1 src={img1} className="img"></Img1>
                            </ColumnContent2>
                            </Bounce>

                            <PandaP>
                            Cool Panda is a fun and interactive Community focused NFT project which gets you a bamboo load of perks and benefits like an awesome profile pic, participation in community events, and exclusive access to breeding and raising Baby Cool Pandas through an interactive experience – where you determine the final outcome of your NFT. Staking a Panda will earn $PND based on its rarity.
                            </PandaP>
                        </ColumnContent>

                        <ColumnContent2>
                        
                            <PandaH1v2>
                            What’s in it for me to buy a Cool Panda?
                            </PandaH1v2>

                            <PandaPFlexContainer>
                                <PandaPContent>
                                    <MintH1>Cool OG</MintH1>
                                    <MintDetails>0.05 ETH Ξ</MintDetails>
                                </PandaPContent>
                                <PandaPContent>
                                    <MintH1>Cool WL</MintH1>
                                    <MintDetails>0.06 ETH Ξ</MintDetails>
                                </PandaPContent>
                                <PandaPContent>
                                    <MintH1>Public</MintH1>
                                    <MintDetails>0.08 ETH Ξ</MintDetails>
                                </PandaPContent>
                            </PandaPFlexContainer>

                            <PandaP2>
                            Cool Monkes are priced to help make minting fun and accessible to everyone. Two Cool Monkes are required to participate in breeding, which will take place shortly after minting.
                            </PandaP2>

                           
                        </ColumnContent2>
                    </FlexboxPandaContainer>

                    <PandaFlexContainer>
                        <PandaColumnContent>
                            <Img src={img}/>
                        </PandaColumnContent>
                    </PandaFlexContainer>

                    
                </PandaColumn>
            </PandaRow>
        </PandaContent>
    </PandaContainer>
  )
}

export default Pandaprice