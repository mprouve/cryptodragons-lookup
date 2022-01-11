import styled from 'styled-components'
import theme from '../../../../res/theme.js'

export const MainContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  box-sizing: border-box;
`

export const InnerContainer = styled.div`
  background-color: #fff;
  width: 40rem;
  max-height: ${({ maxHeight }) => maxHeight};
  padding: 2rem;
  border-radius: 0.3rem;
  overflow: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 700px) {
    width: 90%;
  }
`

export const Header = styled.h1`
  display: block;
  text-align: center;
  font-size: 1.6rem;
  font-weight: ${theme.typography.fontWeight.regular};
  color: ${theme.typography.fontColor.general};
`

export const Subheader = styled.h2`
  display: block;
  margin-top: 1rem;
  text-align: center;
  font-size: ${theme.typography.fontSizes.regular};
  font-weight: ${theme.typography.fontWeight.regular};
  color: ${theme.typography.fontColor.header};
`

export const Form = styled.form`
  display: block;
  margin-top: 2rem;
`

export const WalletAddress = styled.div`
  display: block;
  margin-top: 1rem;
  padding: 0.6rem 1rem;
  text-align: center;
  border: 1px solid ${theme.palette.secondary};
  border-radius: 0.3rem;
  font-size: ${theme.typography.fontSizes.regular};
  font-weight: ${theme.typography.fontWeight.regular};
  color: ${theme.palette.secondary};
  word-wrap: break-word;
`

export const EtherscanLink = styled.a`
  display: inline-block;
  margin-top: 0.3rem;
  text-align: center;
  font-size: ${theme.typography.fontSizes.small};
  font-weight: ${theme.typography.fontWeight.regular};
  color: ${theme.typography.fontColor.header};
  word-wrap: break-word;
  text-decoration: underline;
`

export const Input = styled.input`
  background-color: #fff;
  display: block;
  width: 100%;
  height: 2.7rem;
  margin-top: 2rem;
  padding: 0.8rem 1rem;
  border: 1px solid #aaa;
  border-radius: 0.3rem;
  box-sizing: border-box;
  font-size: ${theme.typography.fontSizes.short};
  font-weight: ${theme.typography.fontWeight.light};
  color: ${theme.typography.fontColor.general};

  &:focus,
  &:hover,
  &:active {
    border-width: 2px;
    outline: none;
  }

  &::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: ${theme.typography.fontColor.header};
    font-family: ${theme.typography.fontFamily};
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: ${theme.typography.fontColor.header};
    font-family: ${theme.typography.fontFamily};
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: ${theme.typography.fontColor.header};
    font-family: ${theme.typography.fontFamily};
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: ${theme.typography.fontColor.header};
    font-family: ${theme.typography.fontFamily};
  }
`

export const BrandingImage = styled.img`
  display: block;
  width: 6rem;
  height: auto;
  margin: 2rem auto 0 auto;
`

export const TransactionsHeader = styled.div`
  margin: 2rem 0 1rem 0;
  text-align: center;
  font-size: ${theme.typography.fontSizes.regular};
  font-weight: ${theme.typography.fontWeight.regular};
  color: ${theme.typography.fontColor.header};
`

export const Transaction = styled.p`
  background-color: #e6ffee;
  padding: 1rem 1.5rem;
  margin-top: 1rem;
  text-align: center;
  border-radius: 0.3rem;
  font-size: ${theme.typography.fontSizes.short};
  font-weight: ${theme.typography.fontWeight.regular};
  color: ${theme.typography.fontColor.general};
  word-wrap: break-word;
`
