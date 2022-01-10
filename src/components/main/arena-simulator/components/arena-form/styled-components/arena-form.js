import styled from 'styled-components'
import theme from '../../../../../../res/theme.js'

export const MainContainer = styled.div`
  display: block;
  margin-top: 2rem;
`

export const Form = styled.form`
  display: block;
  width: 40rem;
  margin: 2rem auto 0 auto;
  text-align: center;

  @media (max-width: 700px) {
    width: 100%;
  }
`

export const Input = styled.input`
  background-color: #fff;
  display: block;
  width: 100%;
  height: 2.7rem;
  margin-top: 1rem;
  padding: 0.8rem 1rem;
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
`
