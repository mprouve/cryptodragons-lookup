import styled from "styled-components"
import theme from "../../../../res/theme.js"

export const MainContainer = styled.div`
  ${'' /* background-color: black; */}
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const ContentContainer = styled.div`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`

export const Heading = styled.h3`
  display: block;
  text-align: center;
  font-size: 3.6rem;
  font-weight: ${theme.typography.fontWeight.regular};
  color: ${theme.typography.fontColor.general};
`
