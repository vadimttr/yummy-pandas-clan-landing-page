import React from 'react'
import { PandaContainer, PandaBg, PandaContent, PandaRow,
    PandaColumn, FlexboxPandaContainer, ColumnContent, ColumnContent2,
    PandaH1, PandaP, PandaFlexContainer,PandaColumnContent, Img} from './PandapriceElements'
import img from '../../image/acquirepanda2.png'
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
                            <PandaP>
                            Cool Panda is a fun and interactive Community focused NFT project which gets you a bamboo load of perks and benefits like an awesome profile pic, participation in community events, and exclusive access to breeding and raising Baby Cool Pandas through an interactive experience – where you determine the final outcome of your NFT. Staking a Panda will earn $PND based on its rarity.
                            </PandaP>
                        </ColumnContent>

                        <ColumnContent2>
                        
                            <PandaH1>
                            What’s in it for me to buy a Cool Panda?
                            </PandaH1>
                            <PandaP>
                            Cool OG 0.05 ETH, Cool WL 0.06 ETH, Public 0.08 ETH.
                            </PandaP>

                            <PandaP>
                            Cool Monkes are priced to help make minting fun and accessible to everyone. Two Cool Monkes are required to participate in breeding, which will take place shortly after minting.
                            </PandaP>

                           
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