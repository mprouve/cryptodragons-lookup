import styled from "styled-components"
import theme from "../../../../../../../../res/theme.js"

export const Form = styled.form`
  text-align: center;
`

export const Input = styled.input`
  background-color: #fff;
  display: inline-block;
  width: 74%;
  height: 2.7rem;
  padding: 0.8rem 1rem;
  vertical-align: middle;
  border: none;
  border-radius: 0.3rem;
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.fontSizes.short};
  font-weight: ${theme.typography.fontWeight.light};
  color: ${theme.typography.fontColor.general};

  &:focus,
  &:hover,
  &:active {
    border: none;
    outline: none;
  }

  &::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: ${theme.typography.fontColor.header};
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: ${theme.typography.fontColor.header};
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: ${theme.typography.fontColor.header};
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: ${theme.typography.fontColor.header};
  }

  @media (max-width: 700px) {
    display: block;
    width: 100%;
  }
`
