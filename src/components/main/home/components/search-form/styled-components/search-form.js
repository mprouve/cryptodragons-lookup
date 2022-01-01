import styled from "styled-components"
import theme from "../../../../../../res/theme.js"

export const MainContainer = styled.div`
  display: block;
  margin-top: 2rem;
`

export const TabsContainer = styled.div`
  text-align: center;
  font-size: 0;
`

export const Tab = styled.div`
  background-color: ${({ selected }) => (selected ? "#fff" : "none")};
  display: inline-block;
  min-width: 10rem;
  margin: 0.3rem 0.5rem;
  padding: 0.5rem 1.5rem 0.6rem 1.5rem;
  border: 1px solid #fff;
  border-radius: 0.3rem;
  text-align: center;
  font-size: ${theme.typography.fontSizes.regular};
  font-weight: ${theme.typography.fontWeight.regular};
  color: ${({ selected }) =>
    selected ? "#000" : theme.typography.fontColor.light};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ selected }) =>
      selected ? "#fff" : "rgba(255, 255, 255, 0.1)"};
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 600px) {
    display: block;
    min-width: auto;
    width: 80%;
    margin: 0.3rem auto 0.3rem auto;
  }
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
