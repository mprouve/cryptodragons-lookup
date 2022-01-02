import styled from "styled-components"
// import theme from "../../../../../../../../res/theme.js"

export const Form = styled.form`
  margin-top: 1rem;
`

export const OptionsContainer = styled.div`
  & > div:nth-child(1) {
    display: flex;
    justify-content: space-between;

    @media (max-width: 630px) {
      display: block;

      & > div:nth-child(2) {
        display: block;
        margin-top: 1rem;
      }
    }
  }

  & > div:nth-child(2) {
    display: block;
    margin-top: 1rem;
  }
`
