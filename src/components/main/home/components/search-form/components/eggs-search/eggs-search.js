import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { getEggs } from "../../../../../../../redux/thunks/eggs/get-eggs.js"
import HatchedToggle from "./components/hatched-toggle/hatched-toggle.js"
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
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    setProcessing(true)

    dispatch(
      getEggs({
        isHatched,
        page: 1,
        limit: 50,
        from: 0,
        isMock: false,
        showBlacklisted: true,
      })
    )
      .then((data) => {
        if (!data.error) {
          console.log("[SUCCESS]: ", data.message)

          if (isHatched) {
            setTab("eggshells")
          } else {
            setTab("eggs")
          }

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
        <HatchedToggle isHatched={isHatched} setIsHatched={setIsHatched} />
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

export default EggsSearch
