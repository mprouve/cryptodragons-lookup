import React from "react"
import CryptoDragonsLogo from "../../media/images/logo/cryptodragons-logo.png"
import {
  FooterContainer,
  FooterInnerContainer,
  UserDetailsContainer,
  UserDetails,
  UserName,
  // UserSocialContainer,
  Logo,
  Links,
  Link,
  //   Copyright,
  Notice,
} from "./styled-components/footer.js"
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
      </FooterInnerContainer>
    </FooterContainer>
  )
}

export default Footer
