import config from "../../../config.js"
import { toasterActions } from "../../action-creators/toaster.js"
import { dragonsActions } from "../../action-creators/dragons.js"

/*
 * METHOD TO GET DRAGON BY ID
 */
export const getDragon = (params) => {
  let responseCode = ""
  const method = "GET"
  const url = `${config.api}/dragon/${params.dragonId}`
  const headers = {
    "Content-Type": "application/json",
  }

  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.
  return (dispatch) => {
    console.log("Sending get dragon by ID request to CryptoDragons")

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
          dispatch(toasterActions.set("Successfully retrieved dragon!"))
          dispatch(dragonsActions.set([data.result]))

          return {
            error: false,
            code: responseCode,
            message: "Successfully retrieved dragon!",
            data
          }
        }

        dispatch(
          toasterActions.set(
            responseCode === 404
              ? "Dragon not found."
              : "Something wen't wrong. Please try again later"
          )
        )

        return {
          error: true,
          code: responseCode === 404,
          message:
            responseCode === 404
              ? "Dragon not found."
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
