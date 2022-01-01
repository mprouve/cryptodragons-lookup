import React from "react"
import styled from "styled-components"
import theme from "../../res/theme.js"

const ErrorContainer = styled.div`
  background-color: ${theme.palette.error};
  width: 100%;
  padding: .8rem 1rem;
  margin-bottom: 1rem;
  border-radius: 0.3rem;
  color: #fff;
  box-sizing: border-box;
  line-height: 1rem;
  text-align: left;
  font-size: ${theme.typography.fontSizes.short};
  font-weight: ${theme.typography.fontWeight.strong};
  word-break: break-word;
`

const FormError = (props) => {
  const message =
    typeof props.message === "undefined" || props.message === null
      ? "Something went wrong."
      : props.message.toString()

  if (props.message !== "") {
    return (
      <ErrorContainer style={props.style ? props.style : {}}>
        {message}
      </ErrorContainer>
    )
  } else {
    return null
  }
}

export default FormError
