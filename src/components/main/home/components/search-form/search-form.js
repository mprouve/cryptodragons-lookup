import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getDragons } from "../../../../../redux/thunks/dragons/get-dragons.js"
import { getEggs } from "../../../../../redux/thunks/eggs/get-eggs.js"
import { getDragon } from "../../../../../redux/thunks/dragons/get-dragon.js"
import { getEgg } from "../../../../../redux/thunks/eggs/get-egg.js"
import FormError from "../../../../form-error/form-error.js"
import Button from "@mui/material/Button"
import CircularProgress from "@mui/material/CircularProgress"
import {
  MainContainer,
  TabsContainer,
  Tab,
  Form,
  Input,
} from "./styled-components/search-form.js"

const styles = {
  button: {
    display: "inline-block",
    width: "23%",
    height: "2.7rem",
    verticalAlign: "middle",
    marginLeft: "3%",
    "@media (max-width: 700px)": {
      display: "block",
      width: "100%",
      margin: "1rem auto 0 auto",
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

const SearchForm = ({ setTab }) => {
  const [searchType, setSearchType] = useState("dragon")
  const [search, setSearch] = useState("")
  const [splitSearch, setSplitSearch] = useState([])
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState("")
  const dispatch = useDispatch()

  useEffect(() => {
    const normalizedSearch = search.replace(/\s/g, "")

    setSplitSearch(normalizedSearch.split(","))
  }, [search])

  const getPlaceholder = () => {
    switch (searchType) {
      case "dragon":
        return "Please enter your dragon ID"
      case "egg":
        return "Please enter your egg ID"
      case "address":
        return "Please enter your wallet address"
      default:
        return "Dragon ID"
    }
  }

  const handleChangeTab = (tab) => {
    setSearch("")
    setProcessing(false)
    setError("")
    setSearchType(tab)

    if (tab === "dragon") setTab("dragons")
    if (tab === "egg") setTab("eggs")
    if (tab === "address") setTab("dragons")
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (searchType === "dragon") {
      if (splitSearch.length === 1) {
        handleGetDragon()
      } else {
        handleGetDragons()
      }
    } else if (searchType === "egg") {
      if (splitSearch.length === 1) {
        handleGetEgg()
      } else {
        handleGetEggs()
      }
    } else if (searchType === "address") {
      handleGetUserEggsAndDragons()
    }
  }

  const handleGetDragons = () => {
    setProcessing(true)

    dispatch(
      getDragons({
        id: splitSearch.join("%2C"),
        status: "arena%2Cfight%2Csale%2Csiring%2Cnone",
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
        setProcessing(false)
      })
  }

  const handleGetDragon = () => {
    setProcessing(true)

    dispatch(getDragon({ dragonId: search, status: "" }))
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
        setProcessing(false)
      })
  }

  const handleGetEggs = () => {
    setProcessing(true)

    dispatch(getEggs({ search: splitSearch.join("%2C"), page: 1, limit: 50, isMock: false }))
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
        setProcessing(false)
      })
  }

  const handleGetEgg = () => {
    setProcessing(true)

    dispatch(getEgg({ eggId: search }))
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
        setProcessing(false)
      })
  }

  const handleGetUserEggsAndDragons = () => {
    setProcessing(true)

    dispatch(
      getDragons({
        owner: search,
        currentUserId: search,
        status: "arena%2Cfight%2Csale%2Csiring%2Cnone",
        showBlacklisted: true,
        isMock: false,
      })
    )
      .then((data1) => {
        if (!data1.error) {
          console.log("[SUCCESS]: ", data1.message)

          dispatch(
            getEggs({ owner: search, currentUserId: search, isMock: false })
          ).then((data2) => {
            if (!data1.error) {
              console.log("[SUCCESS]: ", data1.message)

              setError("")
            } else {
              console.log("[FAIL]: ", data1.message)

              setError(data1.message)
            }

            setProcessing(false)
          })
        } else {
          console.log("[FAIL]: ", data1.message)

          setError(data1.message)
          setProcessing(false)
        }
      })
      .catch((e) => {
        setProcessing(false)
      })
  }

  return (
    <MainContainer>
      <TabsContainer>
        <Tab
          onClick={() => handleChangeTab("dragon")}
          selected={searchType === "dragon"}>
          Dragon
        </Tab>
        <Tab
          onClick={() => handleChangeTab("egg")}
          selected={searchType === "egg"}>
          Egg
        </Tab>
        <Tab
          onClick={() => handleChangeTab("address")}
          selected={searchType === "address"}>
          User Address
        </Tab>
      </TabsContainer>

      <Form onSubmit={handleSubmit}>
        <FormError message={error} />

        <Input
          name="search-input"
          type="text"
          placeholder={getPlaceholder()}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

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
    </MainContainer>
  )
}

export default SearchForm
