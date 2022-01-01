import React from "react"
import { useNavigate } from "react-router-dom"
import Button from "@mui/material/Button"
import {
  MainContainer,
  ContentContainer,
  Heading,
} from "./styled-components/page-not-found.js"

const styles = {
  button: {
    display: "block",
    width: "13rem",
    height: "3.2rem",
    margin: "1.5rem auto 0 auto",
  },
}

const PageNotFound = () => {
  const navigate = useNavigate()

  return (
    <MainContainer>
      <ContentContainer>
        <Heading>Page not found</Heading>
        <Button
          variant="contained"
          color="primary"
          sx={styles.button}
          onClick={() => navigate("/", { replace: true })}>
          Return Home
        </Button>
      </ContentContainer>
    </MainContainer>
  )
}

export default PageNotFound
