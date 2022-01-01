import styled from "styled-components"
import theme from "../../../res/theme.js"

export const FooterContainer = styled.footer`
  background-color: #ddd;
  padding: 2.5rem 3rem 2.8rem 3rem;
`

export const FooterInnerContainer = styled.div`
  display: block;
  max-width: 80rem;
  min-height: 4.9rem;
  margin: 0 auto;
`

export const Logo = styled.img`
  display: block;
  height: 2.5rem;
  width: auto;
  margin: 0 auto;

  @media (max-width: 700px) {
    float: none;
    margin: 0 auto;
  }
`

export const Links = styled.div`
  display: block;
  margin-top: 1.2rem;
  font-size: ${theme.typography.fontSizes.regular};
  font-weight: ${theme.typography.fontWeight.regular};
  color: #555;
  text-align: center;

  & a {
    display: inline-block;
    margin: 0.2rem 1rem;
    font-size: ${theme.typography.fontSizes.regular};
    font-weight: ${theme.typography.fontWeight.regular};
    color: #555;
    cursor: pointer;

    &:link,
    &:visited,
    &:active {
      text-decoration: none;
      color: #555;
    }

    &:hover {
      text-decoration: underline;
      color: #555;
    }
  }
`

export const Link = styled.a`
  display: inline-block;
  margin: 0.2rem 1rem;
  font-size: ${theme.typography.fontSizes.regular};
  font-weight: ${theme.typography.fontWeight.regular};
  color: ${theme.typography.fontColor.header};
  cursor: pointer;

  &:link,
  &:visited,
  &:active {
    text-decoration: none;
    color: ${theme.typography.fontColor.header};
  }

  &:hover {
    text-decoration: underline;
    color: ${theme.typography.fontColor.header};
  }
`

// export const Copyright = styled.p`
//   display: block;
//   margin-top: 1.5rem;
//   text-align: center;
//   font-family: ${theme.typography.fontFamily};
//   font-size: ${theme.typography.fontSizes.short};
//   font-weight: ${theme.typography.fontWeight.regular};
//   color: ${theme.typography.fontColor.headerCopy};
// `

export const Notice = styled.p`
  display: block;
  margin-top: 1.5rem;
  text-align: center;
  font-size: ${theme.typography.fontSizes.small};
  font-weight: ${theme.typography.fontWeight.regular};
  color: ${theme.typography.fontColor.header};
`

export const UserDetailsContainer = styled.div`
  display: block;
  margin-top: 0.2rem;
  text-align: center;
  font-size: 0;
`

export const UserDetails = styled.div`
  display: inline-block;
  vertical-align: top;
`

export const UserName = styled.p`
  display: block;
  font-size: ${theme.typography.fontSizes.small};
  font-weight: ${theme.typography.fontWeight.regular};
  color: ${theme.typography.fontColor.header};
  text-align: center;
`

export const UserSocialContainer = styled.div`
  margin-top: 1rem;
`
