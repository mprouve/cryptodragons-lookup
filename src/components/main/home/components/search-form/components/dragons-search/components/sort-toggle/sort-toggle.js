import React from "react"
import Button from "@mui/material/Button"
import { ButtonsContainer } from "./styled-components/sort-toggle.js"

const styles = {
  button: {
    borderRadius: "0",
    textTransform: "none",
    minHeight: "2.7rem",
    height: "2.7rem",
    minWidth: 'auto',
    width: "16.75%",
    padding: "10px",
    fontSize: ".9rem",
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
  buttonLeftCenter: {
    marginLeft: "-1px",
    marginRight: "-1px",
  },
  buttonRightCenter: {
    marginRight: "-1px",
  },
  buttonRight: {
    borderRadius: ".3rem",
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
    marginLeft: "-1px",
  },
  sortAsc: {
    "& .material-icons": {
      margin: ".2rem 0 0 .3rem",
      fontSize: "1.2rem",
      transform: "rotate(180deg)",
    },
  },
  sortDesc: {
    "& .material-icons": {
      margin: ".2rem 0 0 .3rem",
      fontSize: "1.2rem",
    },
  },
}

const SortToggle = ({ sortBy, setSortBy, sortDirection, setSortDirection }) => {
  const sortStyling = sortDirection === "ASC" ? styles.sortAsc : styles.sortDesc

  const handleClick = (sort) => {
    if (sort === sortBy) {
      if (sortDirection === "ASC") {
        setSortDirection("DESC")
      } else {
        setSortDirection("ASC")
      }
    } else {
      setSortBy(sort)
      setSortDirection("ASC")
    }
  }

  return (
    <ButtonsContainer>
      <Button
        variant={sortBy !== "strength" ? "outlined" : "contained"}
        onClick={() => handleClick("strength")}
        sx={{ ...styles.button, ...styles.buttonLeft, ...sortStyling }}>
        Strength
        {sortBy === "strength" && <span className="material-icons">sort</span>}
      </Button>

      <Button
        variant={sortBy !== "fifteens" ? "outlined" : "contained"}
        onClick={() => handleClick("fifteens")}
        sx={{ ...styles.button, ...sortStyling }}>
        15s
        {sortBy === "fifteens" && <span className="material-icons">sort</span>}
      </Button>

      <Button
        variant={sortBy !== "totalTraits" ? "outlined" : "contained"}
        onClick={() => handleClick("totalTraits")}
        sx={{ ...styles.button, ...styles.buttonLeftCenter, ...sortStyling }}>
        Traits
        {sortBy === "totalTraits" && (
          <span className="material-icons">sort</span>
        )}
      </Button>

      <Button
        variant={sortBy !== "Likes" ? "outlined" : "contained"}
        onClick={() => handleClick("Likes")}
        sx={{ ...styles.button, ...styles.buttonRightCenter, ...sortStyling }}>
        Likes
        {sortBy === "Likes" && <span className="material-icons">sort</span>}
      </Button>

      <Button
        variant={sortBy !== "Price" ? "outlined" : "contained"}
        onClick={() => handleClick("Price")}
        sx={{ ...styles.button, ...sortStyling }}>
        Price
        {sortBy === "Price" && <span className="material-icons">sort</span>}
      </Button>

      <Button
        variant={sortBy !== "Type" ? "outlined" : "contained"}
        onClick={() => handleClick("Type")}
        sx={{ ...styles.button, ...styles.buttonRight, ...sortStyling }}>
        Type
        {sortBy === "Type" && <span className="material-icons">sort</span>}
      </Button>
    </ButtonsContainer>
  )
}

export default SortToggle
