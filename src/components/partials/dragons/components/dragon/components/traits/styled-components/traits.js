import styled from 'styled-components'
import theme from '../../../../../../../../res/theme.js'

export const MainContainer = styled.div`
  margin-top: 1rem;
`

export const StatsContainer = styled.div`
  font-size: 0;

  & > div {
    display: inline-block;
    width: 48%;
    vertical-align: top;
    margin-top: 1.5rem;

    @media (max-width: 650px) {
      display: block;
      width: 100%;
      margin-left: 0;
    }
  }

  & > div:last-child {
    margin-left: 4%;

    @media (max-width: 650px) {
      margin-left: 0;
      margin-top: 1rem;
    }
  }

  & > div > div:nth-child(1) {
    margin-top: 0;
  }
`

export const Stat = styled.div`
  margin-top: 1rem;
`

export const StatIconContainer = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
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
  font-size: ${theme.typography.fontSizes.short};
  font-weight: ${theme.typography.fontWeight.regular};
  line-height: 1.3rem;
  color: ${theme.typography.fontColor.general};
`

export const StatValue = styled.p`
  margin-top: 0.2rem;
  font-size: ${theme.typography.fontSizes.short};
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: 1.2rem;
  color: ${theme.typography.fontColor.general};
  text-transform: capitalize;
`
