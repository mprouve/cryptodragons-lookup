import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { getDragons } from "../../../../../../../redux/thunks/dragons/get-dragons.js"
import { dragonsQueryActions } from "../../../../../../../redux/action-creators/dragons-query.js"
import TypeToggle from "./components/type-toggle/type-toggle.js"
import StatusToggle from "./components/status-toggle/status-toggle.js"
import SortToggle from "./components/sort-toggle/sort-toggle.js"
import Button from "@mui/material/Button"
import CircularProgress from "@mui/material/CircularProgress"
import { Form, OptionsContainer } from "./styled-components/dragons-search.js"

const getConditionalQueryKeys = (sortBy) => {
  const queryKeys = {
    page: 1,
    sortBy,
    limit: 20,
    customSort: "",
  }

  if (
    sortBy === "strength" ||
    sortBy === "fifteens" ||
    sortBy === "totalTraits"
  ) {
    queryKeys.page = 0
    queryKeys.sortBy = ""
    queryKeys.limit = 9999
    queryKeys.customSort = sortBy
  }

  return queryKeys
}

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

    const query = {
      ...getConditionalQueryKeys(sortBy),
      typeFilter: typeFilter.join("%2C"),
      status: status.join("%2C"),
      sortDirection,
      from: 0,
      showBlacklisted: true,
      isMock: false,
    }

    dispatch(getDragons(query, false))
      .then((data) => {
        if (!data.error) {
          console.log("[SUCCESS]: ", data.message)

          dispatch(dragonsQueryActions.set(query))
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
        <SortToggle
          sortBy={sortBy}
          setSortBy={setSortBy}
          sortDirection={sortDirection}
          setSortDirection={setSortDirection}
        />
        <TypeToggle typeFilter={typeFilter} setTypeFilter={setTypeFilter} />
        <StatusToggle status={status} setStatus={setStatus} />
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
