import React from 'react'
import { PandaContainer, PandaBg, PandaContent, PandaRow,
    PandaColumn, FlexboxPandaContainer, ColumnContent, ColumnContent2,
    PandaH1, PandaP, PandaFlexContainer,PandaColumnContent, Img} from './PandapriceElements'
import img from '../../image/xxx.jpg'
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
                                loremasdadasdasdlaksjdlajsdlkasjd
                                laksdjlaksjdlkajsdlkasjdlkasdjlak
                                alskdjlaksjdkajsdlkajsdlkajsdlkaj
                                alskdjlaksjdkajsdlkajsdlkajsdlkaj
                                alskdjlaksjdkajsdlkajsdlkajsdlkaj
                                alskdjlaksjdkajsdlkajsdlkajsdlkaj
                                alskdjlaksjdkajsdlkajsdlkajsdlkaj
                                alskdjlaksjdkajsdlkajsdlkajsdlkaj
                            </PandaP>
                        </ColumnContent>

                        <ColumnContent2>
                            <PandaP>
                                loremasdadasdasdlaksjdlajsdlkasjd
                                laksdjlaksjdlkajsdlkasjdlkasdjlak
                                alskdjlaksjdkajsdlkajsdlkajsdlkaj
                                alskdjlaksjdkajsdlkajsdlkajsdlkaj
                                alskdjlaksjdkajsdlkajsdlkajsdlkaj
                                alskdjlaksjdkajsdlkajsdlkajsdlkaj
                                alskdjlaksjdkajsdlkajsdlkajsdlkaj
                                alskdjlaksjdkajsdlkajsdlkajsdlkaj
                            </PandaP>
                            <PandaH1>
                                Prices
                            </PandaH1>
                            <PandaP>
                                loremasdadasdasdlaksjdlajsdlkasjd
                                laksdjlaksjdlkajsdlkasjdlkasdjlak
                                alskdjlaksjdkajsdlkajsdlkajsdlkaj
                                alskdjlaksjdkajsdlkajsdlkajsdlkaj
                                alskdjlaksjdkajsdlkajsdlkajsdlkaj
                                alskdjlaksjdkajsdlkajsdlkajsdlkaj
                                alskdjlaksjdkajsdlkajsdlkajsdlkaj
                                alskdjlaksjdkajsdlkajsdlkajsdlkaj
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