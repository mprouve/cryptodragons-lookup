import styled from "styled-components"
import theme from "../../../../res/theme.js"

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

export const HeroContainer = styled.div`
  background-image: linear-gradient(
    75deg,
    rgb(153, 102, 255) 5%,
    rgb(77, 166, 255) 100%
  );
  padding: 3.8rem 2rem 4.5rem 2rem;
`

export const InnerContainer = styled.div`
  display: block;
  max-width: 80rem;
  margin: 0 auto;
`

export const Heading = styled.h1`
  display: block;
  text-align: center;
  font-size: 2.4rem;
  font-weight: ${theme.typography.fontWeight.regeular};
  color: ${theme.typography.fontColor.light};
`

export const Subheading = styled.h2`
  display: block;
  max-width: 48rem;
  margin: 0.7rem auto 0 auto;
  text-align: center;
  font-size: ${theme.typography.fontSizes.regular};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.typography.fontColor.light};
`

export const Separator = styled.div`
  display: block;
  width: 4rem;
  margin: 2rem auto;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
`

export const TabsContainer = styled.div`
  display: block;
  margin-top: 1rem;
  text-align: center;
  font-size: 0;
`

export const Tab = styled.div`
  position: relative;
  display: inline-block;
  min-width: 12rem;
  margin: 0 0.5rem;
  padding: 0.7rem 1rem;
  text-align: center;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  font-size: ${theme.typography.fontSizes.large};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.typography.fontColor.header};
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #f2f2f2;
  }

  &:active {
    background-color: #eee;
  }

  & > div {
    background-color: ${theme.palette.primary};
    display: block;
    height: 2px;
    width: ${({ selected }) => (selected ? "100%" : "0")};
    position: absolute;
    bottom: 0;
    left: 0;
    transition: width 0.3s ease-in-out;
  }

  @media (max-width: 700px) {
    min-width: 9rem;
  }

  @media (max-width: 550px) {
    min-width: 6rem;
  }

  @media (max-width: 450px) {
    min-width: auto;
    width: 100%;
  }
`

export const ContentContainer = styled.div`
  display: block;
  max-width: 80rem;
  margin: 0 auto;
  padding: 1rem 2rem 3rem 2rem;
`
