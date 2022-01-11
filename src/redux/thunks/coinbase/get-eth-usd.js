/*
 * METHOD TO GET ETH USD Conversion
 */
export const getETHUSD = (params, options = {}) => {
  let responseCode = ''
  const method = 'GET'
  const url = 'https://api.coinbase.com/v2/prices/ETH-USD/buy'

  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.
  return (dispatch) => {
    console.log('Sending get ETH USD conversion to coinbase')

    // Return the fetch so react components calling 'store.dispatch()' can use 'then()'
    return fetch(url, {
      method
    })
      .then((response) => {
        responseCode = response.status

        return response.json()
      })
      .then((data) => {
        console.log({ data })

        if (responseCode === 200) {
          return {
            error: false,
            code: responseCode,
            message: options.customMessage || 'Successfully retrieved ETH-USD conversion!',
            amount: data.amount
          }
        }

        return {
          error: true,
          code: responseCode,
          message:
            responseCode === 404
              ? 'Conversion not found.'
              : "Something wen't wrong. Please try again later"
        }
      })
      .catch((error) => {
        console.log(error)

        return {
          error: true,
          code: '',
          message: "Something wen't wrong. Please try again later"
        }
      })
  }
}
