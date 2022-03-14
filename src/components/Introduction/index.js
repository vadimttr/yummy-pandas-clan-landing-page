import React from 'react'
import { IntroductionContainer, IntroBg, 
    IntroContent, IntroRow, IntroColumn, FlexboxIntroContainer, ColumnContent,
    ColumnContent2, IntroH1, IntroP, Img, ButtonMoto, BtnContainer }
from './IntroductionElements'
import img from '../../image/blockchain.png'

const Introduction = () => {
  return (
    <IntroductionContainer>
        <IntroBg>

        </IntroBg>.

        <IntroContent>
            <IntroRow>
                <IntroColumn>
                    <FlexboxIntroContainer>
                        
                        
                        <ColumnContent2>
                            <Img src={img} className="img"></Img>
                        </ColumnContent2>

                        <ColumnContent>
                            <IntroH1>
                                The leading expert in developing Blockchain Dapps 
                            </IntroH1>
                            <IntroP>
                            Skyshare Systems is a blockchain company that specializes in creating Smart Contracts on the 
                            Ethereum, BSC, Polygon, and Chronos Networks. We develop startup projects by creating stunning Dapps, through the use of the leading technology and Web3. We support you step-by-step of blockchain adoption, design thinking, evaluation, and assessment of blockchain solutions to accelerate your enterprise blockchain deployments.
                            </IntroP>

                            <BtnContainer>
                                <ButtonMoto>Contact Us</ButtonMoto>
                            </BtnContainer>
                            

                        </ColumnContent>
                    </FlexboxIntroContainer>
                </IntroColumn>
            </IntroRow>

        </IntroContent>
    </IntroductionContainer>
  )
}

export default Introduction