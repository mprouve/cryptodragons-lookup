import React from 'react'
import CryptoDragonsLogo from '../../media/images/logo/cryptodragons-logo.png'
import DiscordIcon from '../../media/images/social-icons/discord.png'
import GithubIcon from '../../media/images/social-icons/git.png'
import InstagramIcon from '../../media/images/social-icons/instagram.png'
import LinkedInIcon from '../../media/images/social-icons/linkedin.png'
import RedditIcon from '../../media/images/social-icons/reddit.png'
import TwitterIcon from '../../media/images/social-icons/twitter.png'
import {
  FooterContainer,
  FooterInnerContainer,
  UserDetailsContainer,
  UserDetails,
  UserName,
  Logo,
  Links,
  Link,
  Notice,
  UserSocialContainer,
  SocialImg
} from './styled-components/footer.js'
// import config from "../../config"

const Footer = (props) => {
  const { style } = props

  return (
    <FooterContainer style={style || {}}>
      <FooterInnerContainer>
        <Logo src={CryptoDragonsLogo} alt="CryptoDragons Logo" />

        <Links>
          <Link
            href="https://docs.google.com/spreadsheets/d/1HYK8dKyQb3e7nsAz88n3_M7LD6vu40lDn5lOm-h6OCE/edit?usp=sharing"
            target="_blank"
            rel="noreferrer">
            Dragon Breeding Guide
          </Link>

          <Link
            href="https://chrome.google.com/webstore/detail/dragon-stat-calculator/npbbffpmhkbcebmamddilhalnbppecmh?hl=en-US&authuser=1"
            target="_blank"
            rel="noreferrer">
            Chrome Extension
          </Link>

          <a href="mailto:marcoprouve@gmail.com">Contact Support</a>
        </Links>

        <Notice>
          Note: This is site is an <u>unofficial</u> page for CryptoDragons
        </Notice>

        <UserDetailsContainer>
          <UserDetails>
            <UserName>Developed by Marco Prouve</UserName>
            {/* <UserSocialContainer></UserSocialContainer> */}
          </UserDetails>
        </UserDetailsContainer>

        <UserSocialContainer>
          <a href="https://twitter.com/marco_prouve" target="_blank" rel="noreferrer">
            <SocialImg src={TwitterIcon} alt="Twitter Logo" />
          </a>

          <a href="https://www.instagram.com/marcoprouve/" target="_blank" rel="noreferrer">
            <SocialImg src={InstagramIcon} alt="Instagram Logo" />
          </a>

          <a href="https://www.linkedin.com/in/marcoprouve/" target="_blank" rel="noreferrer">
            <SocialImg src={LinkedInIcon} alt="LinkedIn Logo" />
          </a>

          <a
            href="https://discordapp.com/users/328009884660662272/"
            target="_blank"
            rel="noreferrer">
            <SocialImg src={DiscordIcon} alt="Discord Logo" />
          </a>

          <a href="https://github.com/mprouve" target="_blank" rel="noreferrer">
            <SocialImg src={GithubIcon} alt="Github Logo" />
          </a>

          <a href="https://www.reddit.com/user/marcoprouve" target="_blank" rel="noreferrer">
            <SocialImg src={RedditIcon} alt="Reddit Logo" />
          </a>
        </UserSocialContainer>
      </FooterInnerContainer>
    </FooterContainer>
  )
}

export default Footer
