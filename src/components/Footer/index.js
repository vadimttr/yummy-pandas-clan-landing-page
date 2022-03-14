import React from 'react'
import { FooterContainer, FooterBg, FooterContent,
    FooterRow, FooterColumn, FlexboxContainer,
    FlexboxContent, Socials, SocialImg,
    FooterH1 } from './FooterElements'

import twitter from '../../image/Twitter.png'
import discord from '../../image/discord.png'
import facebook from '../../image/facebook.png'
import instagram from '../../image/instagram.png'
const Footer = () => {
  return (
        <FooterContainer>
            <FooterBg>

            </FooterBg>

            <FooterContent>
                <FooterRow>
                    <FooterColumn>
                        <FlexboxContainer>
                            <FlexboxContent>
                                <Socials>
                                <FooterH1>Contact US</FooterH1>
                                <FooterH1>OpenSea</FooterH1>
                                <SocialImg src={twitter} />
                                <SocialImg src={discord} />
                                <SocialImg src={instagram} />
                                
                                </Socials>
                            </FlexboxContent>
                        </FlexboxContainer>
                    </FooterColumn>
                </FooterRow>
            </FooterContent>
        </FooterContainer>
  )
}

export default Footer