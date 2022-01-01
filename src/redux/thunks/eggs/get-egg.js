import config from "../../../config.js"
import { toasterActions } from "../../action-creators/toaster.js"
import { eggsActions } from "../../action-creators/eggs.js"

/*
 * METHOD TO GET EGG BY ID
 */
export const getEgg = (params) => {
  let responseCode = ""
  const method = "GET"
  const url = `${config.api}/egg/${params.eggId}`
  const headers = {
    "Content-Type": "application/json",
  }

  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.
  return (dispatch) => {
    console.log("Sending get egg by ID request to CryptoDragons")

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
          dispatch(toasterActions.set("Successfully retrieved egg!"))
          dispatch(eggsActions.set([data.result]))

          return {
            error: false,
            code: responseCode,
            message: "Successfully retrieved egg!",
          }
        }

        dispatch(
          toasterActions.set(
            responseCode === 404
              ? "Egg not found."
              : "Something wen't wrong. Please try again later"
          )
        )

        return {
          error: true,
          code: responseCode,
          message:
            responseCode === 404
              ? "Egg not found."
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
