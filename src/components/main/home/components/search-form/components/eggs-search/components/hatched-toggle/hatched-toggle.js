import React from "react"
import Button from "@mui/material/Button"
import { ButtonsContainer } from "./styled-components/hatched-toggle.js"

const styles = {
  button: {
    borderRadius: "0",
    textTransform: "none",
    boxSizing: "border-box",
    minHeight: "2.7rem",
    height: "2.7rem",
    transition: "all .3s ease-in-out",
    "&.MuiButton-outlined": {
      borderColor: "#eee",
      color: "#eee",
    },
    "&.MuiButton-outlined:hover": {
      backgroundColor: "rgba(0,0,0,.1)",
      borderColor: "#eee",
      color: "#eee",
    },
    "&.MuiButton-contained": {
      backgroundColor: "#eee",
      borderColor: "#eee",
      color: "#333",
    },
    "&.MuiButton-contained:hover": {
      backgroundColor: "#ddd",
      borderColor: "#ddd",
    },
    "@media (max-width: 425px)": {
      minWidth: "60px",
      padding: "10px",
    },
  },
  buttonLeft: {
    borderRadius: ".3rem",
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
    marginRight: "-1px",
  },
  buttonRight: {
    borderRadius: ".3rem",
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
  },
}

const HatchedToggle = ({ isHatched, setIsHatched }) => {
  const handleClick = (hatched) => {
    if (isHatched !== hatched) {
      setIsHatched(hatched)
    }
  }

  return (
    <ButtonsContainer>
      <Button
        variant={isHatched || isHatched === "" ? "outlined" : "contained"}
        onClick={() => handleClick(false)}
        sx={{ ...styles.button, ...styles.buttonLeft }}>
        Unhatched
      </Button>

      <Button
        variant={!isHatched || isHatched === "" ? "outlined" : "contained"}
        onClick={() => handleClick(true)}
        sx={{ ...styles.button, ...styles.buttonRight }}>
        Hatched
      </Button>
    </ButtonsContainer>
  )
}

export default HatchedToggle
