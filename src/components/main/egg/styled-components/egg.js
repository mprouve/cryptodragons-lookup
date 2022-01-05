import styled from 'styled-components'
import theme from '../../../../res/theme.js'

export const MainContainer = styled.div``

export const BannerOuterContainer = styled.div`
  background-color: #333;
`

export const BannerInnerContainer = styled.div`
  display: block;
  max-width: 80rem;
  margin: 0 auto;
  padding: 1rem 2rem;
  box-sizing: border-box;
  text-align: center;

  @media (max-width: 900px) {
    padding: 1.5rem 2rem;
  }
`

export const BannerText = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin: 0 0.5rem;
  font-size: ${theme.typography.fontSizes.regular};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.typography.fontColor.light};

  & > a {
    text-decoration: underline;

    &:link,
    &:visited,
    &:active {
      color: ${theme.typography.fontColor.light};
    }
  }

  @media (max-width: 900px) {
    display: block;
    margin-bottom: 1rem;
  }
`

export const UserContainer = styled.div`
  display: block;
  margin-top: 1rem;
  text-align: center;
`

export const UserAddress = styled.div`
  background-color: #eee;
  display: inline-block;
  padding: 1rem;
  margin: 0 2rem;
  text-align: center;
  border-radius: 0.3rem;
  font-size: ${theme.typography.fontSizes.large};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.typography.fontColor.header};
  word-break: break-word;
`

export const ContentContainer = styled.div`
  display: block;
  max-width: 80rem;
  margin: 0 auto;
  padding: 1rem 2rem 3rem 2rem;
`
