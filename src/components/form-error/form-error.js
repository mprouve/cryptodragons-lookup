import React from 'react'
import styled from 'styled-components'
import theme from '../../res/theme.js'

const ErrorContainer = styled.div`
  background-color: ${({ variant }) => (variant === 'outlined' ? 'inherit' : theme.palette.error)};
  width: 100%;
  padding: 0.8rem 1rem;
  margin-bottom: 1rem;
  border: ${({ variant }) =>
    variant === 'outlined' ? `1px solid ${theme.palette.error}` : 'none'};
  border-radius: 0.3rem;
  color: ${({ variant }) => (variant === 'outlined' ? theme.palette.error : '#fff')};
  box-sizing: border-box;
  line-height: 1rem;
  text-align: left;
  font-size: ${theme.typography.fontSizes.short};
  font-weight: ${theme.typography.fontWeight.strong};
  word-break: break-word;
`

const FormError = (props) => {
  const { variant, style, message } = props
  const newMessage =
    typeof message === 'undefined' || message === null
      ? 'Something went wrong.'
      : message.toString()

  if (newMessage !== '') {
    return (
      <ErrorContainer style={style || {}} variant={variant || 'contained'}>
        {newMessage}
      </ErrorContainer>
    )
  } else {
    return null
  }
}

export default FormError
