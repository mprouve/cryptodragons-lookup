import styled from 'styled-components'
import theme from '../../../../../../res/theme.js'

export const MainContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 30%;
  margin: 1rem 1.5%;
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
  vertical-align: top;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 1rem;
  text-align: left;
  box-shadow: 0 0 6px ${theme.palette.primary};

  @media (max-width: 900px) {
    width: 45%;
    margin: 1rem 2.5%;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin: 1rem 0;
  }
`

export const FloatingMeta = styled.div`
  background-color: #fff;
  display: block;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
  box-sizing: border-box;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  z-index: 1;

  & > span {
    display: inline-block;
    vertical-align: middle;
  }

  & .material-icons {
    color: #cc0000;
    fontsize: 1.3rem;
  }

  & > span:nth-child(2) {
    margin-left: 0.3rem;
    line-height: 1.1rem;
    font-size: ${theme.typography.fontSizes.regular};
    font-weight: ${theme.typography.fontWeight.regular};
    color: ${theme.typography.fontColor.general};
  }

  & > span:nth-child(4) {
    margin-left: 0.3rem;
    line-height: 1.1rem;
    font-size: ${theme.typography.fontSizes.regular};
    font-weight: ${theme.typography.fontWeight.regular};
    color: ${theme.typography.fontColor.general};
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

export const TypeContainer = styled.div`
  background-color: ${({ color }) => color};
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.3rem 0.5rem 0.3rem 0.5rem;
  border-radius: 0.3rem;
`

export const TypeText = styled.div`
  background-color: ${({ color }) => color};
  display: inline-block;
  vertical-align: middle;
  font-size: ${theme.typography.fontSizes.smaller};
  font-weight: ${theme.typography.fontWeight.regular};
  line-height: 0.8rem;
  color: ${theme.typography.fontColor.light};
`

export const Tier = styled.div`
  background-color: #fff;
  display: inline-block;
  margin-left: 0.4rem;
  padding: 0.1rem 0.2rem 0.3rem 0.2rem;
  vertical-align: middle;
  border-radius: 0.2rem;
  font-size: ${theme.typography.fontSizes.smaller};
  font-weight: ${theme.typography.fontWeight.regular};
  line-height: 0.7rem;
  color: ${({ color }) => color};
`

export const Separator = styled.div`
  display: block;
  width: 4rem;
  margin: 1.5rem auto 0.5rem auto;
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
  width: 48%;
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
