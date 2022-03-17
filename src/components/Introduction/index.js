import React from 'react'
import { IntroductionContainer, IntroBg, 
    IntroContent, IntroRow, IntroColumn, FlexboxIntroContainer, ColumnContent,
    ColumnContent2, IntroH1, IntroP, Img, ButtonMoto, BtnContainer }
from './IntroductionElements'
import img from '../../image/500x500.jpg'

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
                             </IntroP>

                           
                            

                        </ColumnContent>
                    </FlexboxIntroContainer>
                </IntroColumn>
            </IntroRow>

        </IntroContent>
    </IntroductionContainer>
  )
}

export default Introduction