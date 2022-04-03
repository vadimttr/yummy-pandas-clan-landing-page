import React from 'react'
import { PandaContainer, PandaBg, PandaContent, PandaRow,
    PandaColumn, FlexboxPandaContainer, ColumnContent, ColumnContent2,
    PandaH1, PandaH1v2, PandaP,PandaP2, PandaFlexContainer,PandaColumnContent, Img, Img1,
    PandaPFlexContainer, PandaPContent, MintH1, MintDetails, Container} from './PandapriceElements'
import img from '../../image/acquirepanda3.PNG'
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
                                WHY YUMMY PANDAS?
                            </PandaH1>

                           

                            <PandaP>
                            Yummy Panda NFTs are the basis - and entry token - for the YPC community. Members participate in community events and get an awesome, totally unique profile pic alike image.
                            
                           
                            </PandaP>
                            <br></br>
                            <PandaP>
                            The YPC is also utility-packed. Stake your Yummy Panda to earn BMB tokens based on rarity. Raise your Yummy Panda in our game to transform your NFT, and breed two together to create a totally new Yummy Panda. Be warned - to protect the value of YPC NFTs, you could lose a Yummy Panda when breeding.

                            </PandaP>
                        </ColumnContent>

                        <Bounce>
                            <ColumnContent2>
                                <Img1 src={img1} className="img"></Img1>
                            </ColumnContent2>
                        </Bounce>
                    </FlexboxPandaContainer>

                    <Container>
                            <PandaH1v2>
                            What’s in it for me to buy a Yummy Panda?
                            </PandaH1v2>
                            <PandaP2>
                            Yummy Panda's are priced to help make minting fun and accessible to everyone. Two Yummy Panda's are required to participate in breeding, which will take place shortly after minting.
                            </PandaP2>
                            
                    </Container>

                    <PandaFlexContainer>
                        <PandaColumnContent>
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

                                <PandaPContent>
                                    <MintH1>Lorem</MintH1>
                                    <MintDetails>0.00 ETH Ξ</MintDetails>
                                </PandaPContent>
                            </PandaPFlexContainer>
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