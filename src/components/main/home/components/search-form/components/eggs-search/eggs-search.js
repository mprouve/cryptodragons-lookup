import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getEggs } from "../../../../../../../redux/thunks/eggs/get-eggs.js"
import { eggsQueryActions } from "../../../../../../../redux/action-creators/eggs-query.js"
import HatchedToggle from "./components/hatched-toggle/hatched-toggle.js"
import LimitSelect from "../../../../../../partials/limit-select/limit-select.js"
import Button from "@mui/material/Button"
import CircularProgress from "@mui/material/CircularProgress"
import { Form, OptionsContainer } from "./styled-components/eggs-search.js"

const styles = {
  button: {
    display: "block",
    width: "100%",
    height: "2.7rem",
    marginTop: "1rem",
  },
  loadMoreButton: {
    marginTop: "1rem",
    color: "#eee",
    borderColor: "#eee",
    "&:hover": {
      backgroundColor: "#eee",
      borderColor: "#eee",
      color: "#333",
    },
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

const EggsSearch = ({ setTab, processing, setProcessing, setError }) => {
  const [isHatched, setIsHatched] = useState(false)
  const [limit, setLimit] = useState(25)
  const eggs = useSelector(({ eggs }) => eggs)
  const eggsQuery = useSelector(({ eggsQuery }) => eggsQuery)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    setProcessing(true)

    const query = {
      isHatched,
      page: 1,
      limit,
      from: 0,
      isMock: false,
      showBlacklisted: true,
    }

    dispatch(getEggs(query, false))
      .then((data) => {
        if (!data.error) {
          console.log("[SUCCESS]: ", data.message)

          if (isHatched) {
            setTab("eggshells")
          } else {
            setTab("eggs")
          }

          dispatch(
            eggsQueryActions.set({ ...query, totalItems: data.data.totalItems })
          )
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

  const handleLoadMore = () => {
    setProcessing(true)

    const oldPage = eggsQuery.page
    const from = eggsQuery.limit * oldPage
    const page = oldPage + 1
    const query = { ...eggsQuery, isHatched, from, page }

    dispatch(getEggs(query, true))
      .then((data) => {
        if (!data.error) {
          console.log("[SUCCESS]: ", data.message)

          dispatch(eggsQueryActions.set(query))
        } else {
          console.log("[FAIL]: ", data.message)
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
        <HatchedToggle isHatched={isHatched} setIsHatched={setIsHatched} />
        <LimitSelect limit={limit} setLimit={setLimit} />
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

      {eggs.length > 0 &&
        Object.keys(eggsQuery).length > 0 &&
        eggs.length < eggsQuery.totalItems && (
          <Button
            fullWidth
            variant="outlined"
            sx={styles.loadMoreButton}
            disabled={processing}
            onClick={handleLoadMore}>
            {processing ? (
              <CircularProgress
                color="secondary"
                sx={styles.circularProgress}
              />
            ) : (
              `Load ${eggsQuery.limit} More`
            )}
          </Button>
        )}
    </Form>
  )
}

export default EggsSearch
