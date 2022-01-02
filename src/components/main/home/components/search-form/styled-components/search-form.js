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

export const FormsContainer = styled.div`
  display: block;
  width: 40rem;
  margin: 2rem auto 0 auto;

  @media (max-width: 700px) {
    width: 100%;
  }
`

export const Or = styled.p`
  display: block;
  margin-top: 1rem;
  text-align: center;
  font-size: ${theme.typography.fontSizes.large};
  font-weight: ${theme.typography.fontWeight.regular};
  color: ${theme.typography.fontColor.light};
  text-transform: uppercase;
`
