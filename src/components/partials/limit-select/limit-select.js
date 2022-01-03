import React from "react"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { MainContainer } from "./styled-components/limit-select.js"

const styles = {
  select: {
    minHeight: "2.7rem",
    height: "2.7rem",
    color: "#eee",
    fontSize: "1rem",
    fontWeight: "400",
    transition: "background-color .3s ease-in-out",
    "& svg": {
      color: "#eee",
    },
    "& fieldset": {
      borderColor: "#eee !important",
      borderWidth: "1px !important",
      color: "#eee",
      "& span": {
        width: "6rem",
      },
    },
    "& .Mui-selected": {
      backgroundColor: "#fff",
    },
    "&:hover": {
      backgroundColor: "rgba(0,0,0,.1)",
    },
  },
  label: {
    color: "#eee !important",
    fontSize: "1.1rem",
    fontWeight: "400",
  },
  menuItem: {
    padding: ".2rem 1rem",
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: "#eee",
    },
  },
}

const SortToggle = ({ limit, setLimit }) => {
  return (
    <MainContainer>
      <FormControl fullWidth>
        <InputLabel id="limit-label" sx={styles.label}>
          Limit Per Page
        </InputLabel>

        <Select
          variant="outlined"
          labelId="limit-label"
          id="limit-select"
          value={limit}
          label="Limit"
          onChange={(e) => setLimit(e.target.value)}
          sx={styles.select}>
          {/* <MenuItem value={0}>No Limit</MenuItem> */}
          <MenuItem value={25} sx={styles.menuItem}>
            25
          </MenuItem>
          <MenuItem value={50} sx={styles.menuItem}>
            50
          </MenuItem>
          <MenuItem value={100} sx={styles.menuItem}>
            100
          </MenuItem>
          <MenuItem value={200} sx={styles.menuItem}>
            200
          </MenuItem>
        </Select>
      </FormControl>
    </MainContainer>
  )
}

export default SortToggle
