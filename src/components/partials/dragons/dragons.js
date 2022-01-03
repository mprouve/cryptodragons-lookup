import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getDragons } from "../../../redux/thunks/dragons/get-dragons.js"
import { dragonsQueryActions } from "../../../redux/action-creators/dragons-query.js"
import Dragon from "./components/dragon/dragon.js"
import nestedSort from "../../../utils/functions/nested-sort.js"
import Button from "@mui/material/Button"
import CircularProgress from "@mui/material/CircularProgress"
import { MainContainer, NoResults } from "./styled-components/dragons.js"

const getSortedDragons = (dragons, query) => {
  const sortDirection = query.sortDirection === "DESC" ? -1 : 1

  if (query.customSort === "strength") {
    return nestedSort(dragons, sortDirection, "strength")
  } else if (query.customSort === "fifteens") {
    return nestedSort(dragons, sortDirection, "fifteens")
  } else if (query.customSort === "totalTraits") {
    return nestedSort(dragons, sortDirection, "totalTraits")
  } else {
    return dragons
  }
}

const styles = {
  // topLoadButton: {
  //   display: "block",
  //   width: "10rem",
  //   minHeight: "2.3rem",
  //   height: "2.3rem",
  //   lineHeight: ".8rem",
  //   position: "absolute",
  //   bottom: "0rem",
  //   right: "0rem",
  // },
  circularProgress: {
    display: "block",
    width: "17px !important",
    height: "17px !important",
    margin: ".1rem auto 0 auto",
    "& svg": {
      color: "#333",
    },
  },
}

const Dragons = ({ dragons }) => {
  const [processing, setProcessing] = useState(false)
  const dragonsQuery = useSelector(({ dragonsQuery }) => dragonsQuery)
  const dispatch = useDispatch()
  const sortedDragons = getSortedDragons(dragons, dragonsQuery)

  const handleLoadMore = () => {
    setProcessing(true)

    const oldPage = dragonsQuery.page
    const from = dragonsQuery.limit * oldPage
    const page = oldPage + 1
    const query = { ...dragonsQuery, from, page }

    dispatch(getDragons(query, true))
      .then((data) => {
        if (!data.error) {
          console.log("[SUCCESS]: ", data.message)

          dispatch(dragonsQueryActions.set(query))
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
    <MainContainer>
      {/* <Button
        variant="outlined"
        color="secondary"
        sx={styles.topLoadButton}
        onClick={handleLoadMore}
        disabled={processing}>
        {processing ? (
          <CircularProgress color="secondary" sx={styles.circularProgress} />
        ) : (
          `Load ${dragonsQuery.limit} More`
        )}
      </Button> */}

      {sortedDragons.length &&
        sortedDragons.map((dragon) => {
          return <Dragon key={dragon.id} dragon={dragon} />
        })}

      {sortedDragons.length === 0 && (
        <NoResults>
          No Dragons Returned
          <br />
          ...
        </NoResults>
      )}

      {sortedDragons.length > 0 &&
        Object.keys(dragonsQuery).length > 0 &&
        dragonsQuery.limit > 0 && (
          <div>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              sx={{ maxWidth: "50rem", marginTop: "3rem" }}
              onClick={handleLoadMore}
              disabled={processing}>
              {processing ? (
                <CircularProgress
                  color="secondary"
                  sx={styles.circularProgress}
                />
              ) : (
                `Load ${dragonsQuery.limit} More`
              )}
            </Button>
          </div>
        )}
    </MainContainer>
  )
}

export default Dragons
