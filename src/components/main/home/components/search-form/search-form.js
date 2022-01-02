import React, { useState } from "react"
import FormError from "../../../../form-error/form-error.js"
import TextSearch from "./components/text-search/text-search.js"
import DragonsSearch from "./components/dragons-search/dragons-search.js"
import EggsSearch from "./components/eggs-search/eggs-search.js"
import {
  MainContainer,
  TabsContainer,
  Tab,
  FormsContainer,
  Or,
} from "./styled-components/search-form.js"

const SearchForm = ({ setTab }) => {
  const [searchType, setSearchType] = useState("dragon")
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState("")

  const handleChangeTab = (tab) => {
    setProcessing(false)
    setError("")
    setSearchType(tab)

    if (tab === "dragon") setTab("dragons")
    if (tab === "egg") setTab("eggs")
    if (tab === "address") setTab("dragons")
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

      <FormsContainer>
        <FormError message={error} />

        <TextSearch
          searchType={searchType}
          processing={processing}
          setProcessing={setProcessing}
          setError={setError}
        />

        {searchType !== "address" && <Or>Or</Or>}
        {searchType === "dragon" && (
          <DragonsSearch
            processing={processing}
            setProcessing={setProcessing}
            setError={setError}
          />
        )}
        {searchType === "egg" && (
          <EggsSearch
            setTab={setTab}
            processing={processing}
            setProcessing={setProcessing}
            setError={setError}
          />
        )}
      </FormsContainer>
    </MainContainer>
  )
}

export default SearchForm
