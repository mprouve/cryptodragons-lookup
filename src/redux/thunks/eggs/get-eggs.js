import config from "../../../config.js"
import { toasterActions } from "../../action-creators/toaster.js"
import { eggsActions } from "../../action-creators/eggs.js"
import objectToQueryString from "../../../utils/functions/object-to-query-string.js"

/*
 * METHOD TO GET EGGS BY IDs
 */
export const getEggs = (params, loadMore) => {
  let responseCode = ""
  const method = "GET"
  let url = `${config.api}/eggs`
  const headers = {
    "Content-Type": "application/json",
  }

  // Use objectToQueryString util function to turn params into a query string and append it to URL
  url += objectToQueryString({ ...params })

  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.
  return (dispatch) => {
    console.log("Sending get eggs by ID request to CryptoDragons")

    // Return the fetch so react components calling 'store.dispatch()' can use 'then()'
    return fetch(url, {
      method,
      headers,
    })
      .then((response) => {
        responseCode = response.status

        return response.json()
      })
      .then((data) => {
        console.log({ data })

        if (responseCode === 200) {
          dispatch(toasterActions.set("Successfully retrieved eggs!"))

          if (loadMore) {
            dispatch(eggsActions.add(data.items))
          } else {
            dispatch(eggsActions.set(data.items))
          }

          return {
            error: false,
            code: responseCode,
            message: "Successfully retrieved eggs!",
            data,
          }
        }

        dispatch(
          toasterActions.set(
            responseCode === 404
              ? "Eggs not found."
              : "Something wen't wrong. Please try again later"
          )
        )

        return {
          error: true,
          code: responseCode,
          message:
            responseCode === 404
              ? "Eggs not found."
              : "Something wen't wrong. Please try again later",
        }
      })
      .catch((error) => {
        console.log(error)

        return {
          error: true,
          code: "",
          message: "Something wen't wrong. Please try again later",
        }
      })
  }
}
