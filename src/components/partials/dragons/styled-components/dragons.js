import styled from "styled-components"
import theme from "../../../../res/theme.js"

export const MainContainer = styled.div`
  text-align: center;
  font-size: 0;
  position: relative;
`

export const NoResults = styled.div`
  display: block;
  width: 40rem;
  padding: 4rem 3rem;
  box-sizing: border-box;
  margin: 2rem auto 0 auto;
  border: 2px solid #ccc;
  border-radius: 0.3rem;
  text-align: center;
  font-size: ${theme.typography.fontSizes.regular};
  font-weight: ${theme.typography.fontWeight.regular};
  color: #777;
  ${"" /* box-shadow: 0 0 6px ${theme.palette.secondary}; */}

  @media (max-width: 700px) {
    width: 100%;
  }
`
