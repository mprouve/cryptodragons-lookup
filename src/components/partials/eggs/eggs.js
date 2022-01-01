import React from "react"
import Egg from "./components/egg/egg.js"
import { MainContainer, NoResults } from "./styled-components/eggs.js"

const Eggs = ({ eggs }) => {
  return (
    <MainContainer>
      {eggs.length > 0 &&
        eggs.map((egg) => {
          return <Egg key={egg.id} egg={egg} />
        })}

      {eggs.length === 0 && (
        <NoResults>
          No Eggs Returned
          <br />
          ...
        </NoResults>
      )}
    </MainContainer>
  )
}

export default Eggs
