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

export const HeroContainer = styled.div`
  background-image: linear-gradient(75deg, rgb(153, 102, 255) 5%, rgb(77, 166, 255) 100%);
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

export const ContentContainer = styled.div`
  display: block;
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem 2rem 2rem 2rem;
  text-align: center;
  font-size: 0;
`

export const ContentHeader = styled.div`
  display: block;
  margin-bottom: 2.1rem;
  text-align: center;
  font-size: 1.6rem;
  font-weight: ${theme.typography.fontWeight.medium};
  color: #555;

  @media (max-width: 650px) {
    margin-bottom: 0;
  }
`

export const DragonOuterContainer = styled.div`
  display: inline-block;
  vertical-align: middle;

  @media (max-width: 650px) {
    margin: 2rem auto;
  }
`

export const ProbabilityContainer = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor || 'green'};
  padding: 0.5rem 1.5rem;
  border-radius: 0.3rem;
  text-align: center;
  font-size: ${theme.typography.fontSizes.extraLarge};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.typography.fontColor.light};
`

export const DragonContainer = styled.div`
  display: block;
  width: 15rem;
  margin-top: 1rem;
  padding: 0.5rem 1.5rem 1.5rem 1.5rem;
  vertical-align: middle;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 1rem;
  box-shadow: 0 0 6px ${theme.palette.primary};
  text-align: left;

  @media (max-width: 850px) {
    width: 12rem;
  }

  @media (max-width: 650px) {
    width: 17rem;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 0;
  padding-top: 100%;
  position: relative;
`

export const Image = styled.img`
  display: block;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`

export const ID = styled.p`
  text-align: left;
  font-size: ${theme.typography.fontSizes.small};
  font-weight: ${theme.typography.fontWeight.regular};
  color: ${theme.typography.fontColor.header};
`

export const Name = styled.p`
  text-align: left;
  font-size: ${theme.typography.fontSizes.extraLarge};
  font-weight: ${theme.typography.fontWeight.regular};
  color: ${theme.typography.fontColor.general};
  ${'' /* word-wrap: break-word; */}
  text-overflow: ellipsis;

  /* Needed to make it work */
  overflow: hidden;
  white-space: nowrap;
`

export const BattleImage = styled.img`
  display: inline-block;
  width: 8rem;
  height: auto;
  vertical-align: middle;
  margin: 0 5rem;

  @media (max-width: 850px) {
    width: 6rem;
    margin: 0 2rem;
  }

  @media (max-width: 650px) {
    display: block;
    width: 8rem;
    margin: 2rem auto;
  }

  @media (max-width: 400px) {
    width: 40%;
  }
`

export const StatSeparator = styled.div`
  display: block;
  width: 4rem;
  margin: 1.5rem auto 0.3rem auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`

export const StatsContainer = styled.div`
  font-size: 0;

  & > div {
    margin-top: 1.5rem;
  }

  & > div:nth-child(2n) {
    margin-left: 4%;
  }
`

export const Stat = styled.div`
  display: inline-block;
  width: 100%;
  vertical-align: top;
`

export const StatIconContainer = styled.div`
  background-color: #eee;
  display: block;
  float: left;
  width: 2.3rem;
  height: 2.3rem;
  margin: 0rem 0.8rem 0 0;
  border-radius: 50%;
  position: relative;

  & > .material-icons {
    position: absolute;
    top: 52%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    font-size: 1.4rem;
    color: #555;
  }

  & > .fifteen {
    display: block;
    position: absolute;
    top: 48%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    color: #555;
    font-size: 1rem;
  }
`

export const StatContent = styled.div`
  display: block;
  overflow: hidden;
`

export const StatLabel = styled.p`
  font-size: ${theme.typography.fontSizes.regular};
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: 1rem;
  color: ${theme.typography.fontColor.general};
`

export const StatValue = styled.p`
  margin-top: 0.2rem;
  font-size: ${theme.typography.fontSizes.small};
  font-weight: ${theme.typography.fontWeight.regular};
  line-height: 1.2rem;
  color: ${theme.typography.fontColor.general};
  text-transform: capitalize;

  & > a {
    color: ${theme.palette.link.primary};

    &:link,
    &:visited,
    &:active {
      text-decoration: none;
      color: ${theme.palette.link.primary};
    }

    &:hover {
      text-decoration: underline;
    }
  }
`

export const NoResults = styled.div`
  background-color: #eee;
  padding: 3rem;
  text-align: center;
  border-radius: 0.3rem;
  font-size: ${theme.typography.fontSizes.regular};
  font-weight: ${theme.typography.fontWeight.medium};
  color: #777;
`
