import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { getDragons } from "../../../../../../../redux/thunks/dragons/get-dragons.js"
import TypeToggle from "./components/type-toggle/type-toggle.js"
import StatusToggle from "./components/status-toggle/status-toggle.js"
import SortToggle from "./components/sort-toggle/sort-toggle.js"
import Button from "@mui/material/Button"
import CircularProgress from "@mui/material/CircularProgress"
import { Form, OptionsContainer } from "./styled-components/dragons-search.js"

const styles = {
  button: {
    display: "block",
    width: "100%",
    height: "2.7rem",
    marginTop: "1rem",
  },
  circularProgress: {
    display: "block",
    width: "17px !important",
    height: "17px !important",
    margin: ".1rem auto 0 auto",
    "& svg": {
      color: "white",
    },
  },
}

const DragonsSearch = ({ processing, setProcessing, setError }) => {
  const [typeFilter, setTypeFilter] = useState([])
  const [status, setStatus] = useState(["sale", "siring", "none"])
  const [sortBy, setSortBy] = useState("Type")
  const [sortDirection, setSortDirection] = useState("ASC")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    setProcessing(true)

    dispatch(
      getDragons({
        typeFilter: typeFilter.join("%2C"),
        status: status.join("%2C"),
        sortBy,
        sortDirection,
        page: 1,
        limit: 50,
        from: 0,
        showBlacklisted: true,
        isMock: false,
      })
    )
      .then((data) => {
        if (!data.error) {
          console.log("[SUCCESS]: ", data.message)

          setError("")
        } else {
          console.log("[FAIL]: ", data.message)

          setError(data.message)
        }

        setProcessing(false)
      })
      .catch((e) => {
        console.log("[ERROR]: ", e)

        setProcessing(false)
      })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <OptionsContainer>
        <div>
          <TypeToggle typeFilter={typeFilter} setTypeFilter={setTypeFilter} />
          <SortToggle
            sortBy={sortBy}
            setSortBy={setSortBy}
            sortDirection={sortDirection}
            setSortDirection={setSortDirection}
          />
        </div>

        <div>
          <StatusToggle status={status} setStatus={setStatus} />
        </div>
      </OptionsContainer>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={styles.button}
        disabled={processing}>
        {processing ? (
          <CircularProgress color="secondary" sx={styles.circularProgress} />
        ) : (
          "Search"
        )}
      </Button>
    </Form>
  )
}

export default DragonsSearch
