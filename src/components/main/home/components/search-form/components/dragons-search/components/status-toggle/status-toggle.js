import React from "react"
import Button from "@mui/material/Button"
import { ButtonsContainer } from "./styled-components/status-toggle.js"

const styles = {
  button: {
    borderRadius: "0",
    textTransform: "none",
    boxSizing: 'border-box',
    minHeight: "2.7rem",
    height: "2.7rem",
    width: "20.1%",
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
      padding: "0px",
    },
  },
  buttonLeft: {
    borderRadius: ".3rem",
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
    marginRight: "-1px",
  },
  buttonCenter: {
    marginLeft: "-1px",
    marginRight: "-1px",
  },
  buttonRight: {
    borderRadius: ".3rem",
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
    marginLeft: "-1px",
  },
}

const StatusToggle = ({ status, setStatus }) => {
  const handleClick = (toggle) => {
    const newToggles = [...status]
    const index = status.indexOf(toggle)

    if (newToggles.indexOf(toggle) === -1) {
      newToggles.push(toggle)
    } else {
      newToggles.splice(index, 1)
    }

    if (newToggles.length) {
      setStatus(newToggles)
    }
  }

  return (
    <ButtonsContainer>
      <Button
        variant={status.indexOf("arena") === -1 ? "outlined" : "contained"}
        onClick={() => handleClick("arena")}
        sx={{ ...styles.button, ...styles.buttonLeft }}>
        Arena
      </Button>

      <Button
        variant={status.indexOf("fight") === -1 ? "outlined" : "contained"}
        onClick={() => handleClick("fight")}
        sx={{ ...styles.button }}>
        Fight
      </Button>

      <Button
        variant={status.indexOf("sale") === -1 ? "outlined" : "contained"}
        onClick={() => handleClick("sale")}
        sx={{ ...styles.button, ...styles.buttonCenter }}>
        Sale
      </Button>

      <Button
        variant={status.indexOf("siring") === -1 ? "outlined" : "contained"}
        onClick={() => handleClick("siring")}
        sx={{ ...styles.button }}>
        Siring
      </Button>

      <Button
        variant={status.indexOf("none") === -1 ? "outlined" : "contained"}
        onClick={() => handleClick("none")}
        sx={{ ...styles.button, ...styles.buttonRight }}>
        None
      </Button>
    </ButtonsContainer>
  )
}

export default StatusToggle
