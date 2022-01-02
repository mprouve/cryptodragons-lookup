import React from "react"
import Button from "@mui/material/Button"
import { ButtonsContainer } from "./styled-components/type-toggle.js"

const styles = {
  button: {
    borderRadius: "0",
    textTransform: "none",
    minHeight: "2.7rem",
    height: "2.7rem",
    minWidth: 'auto',
    width: '25.1%',
    padding: "10px",
    overflow: "hidden",
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
    // "@media (max-width: 425px)": {
    //   minWidth: "60px",
    //   padding: "10px",
    // },
  },
  buttonLeft: {
    borderRadius: ".3rem",
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
    marginRight: "-1px",
  },
  buttonRightCenter: {
    marginLeft: "-1px",
  },
  buttonRight: {
    borderRadius: ".3rem",
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
    marginLeft: "-1px",
  },
}

const TypeToggle = ({ typeFilter, setTypeFilter }) => {
  const handleClick = (toggle) => {
    const newToggles = [...typeFilter]
    const index = typeFilter.indexOf(toggle)

    if (newToggles.indexOf(toggle) === -1) {
      newToggles.push(toggle)
    } else {
      newToggles.splice(index, 1)
    }

    setTypeFilter(newToggles)
  }

  return (
    <ButtonsContainer>
      <Button
        variant={typeFilter.indexOf("Common") === -1 ? "outlined" : "contained"}
        onClick={() => handleClick("Common")}
        sx={{ ...styles.button, ...styles.buttonLeft }}>
        Common
      </Button>

      <Button
        variant={typeFilter.indexOf("Rare") === -1 ? "outlined" : "contained"}
        onClick={() => handleClick("Rare")}
        sx={{ ...styles.button }}>
        Rare
      </Button>

      <Button
        variant={typeFilter.indexOf("Epic") === -1 ? "outlined" : "contained"}
        onClick={() => handleClick("Epic")}
        sx={{ ...styles.button, ...styles.buttonRightCenter }}>
        Epic
      </Button>

      <Button
        variant={
          typeFilter.indexOf("Legendary") === -1 ? "outlined" : "contained"
        }
        onClick={() => handleClick("Legendary")}
        sx={{ ...styles.button, ...styles.buttonRight }}>
        Legendary
      </Button>
    </ButtonsContainer>
  )
}

export default TypeToggle
