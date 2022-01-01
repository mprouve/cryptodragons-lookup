import React from "react"
import Dragon from "./components/dragon/dragon.js"
import { MainContainer, NoResults } from "./styled-components/dragons.js"

const Dragons = ({ dragons }) => {
  return (
    <MainContainer>
      {dragons.length &&
        dragons.map((dragon) => {
          return <Dragon key={dragon.id} dragon={dragon} />
        })}

      {dragons.length === 0 && (
        <NoResults>
          No Dragons Returned
          <br />
          ...
        </NoResults>
      )}
    </MainContainer>
  )
}

export default Dragons
