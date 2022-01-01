import React, { useState } from "react"
import filter from "lodash/filter"
import { useSelector } from "react-redux"
import SearchForm from "./components/search-form/search-form.js"
import Dragons from "../../partials/dragons/dragons.js"
import Eggs from "../../partials/eggs/eggs.js"
import {
  MainContainer,
  HeroContainer,
  InnerContainer,
  Heading,
  Subheading,
  Separator,
  TabsContainer,
  Tab,
  ContentContainer,
} from "./styled-components/home.js"

const Home = () => {
  const [tab, setTab] = useState("dragons")
  const dragons = useSelector(({ dragons }) => dragons)
  const eggs = useSelector(({ eggs }) => eggs)
  const unhatchedEggs = filter(eggs, (egg) => {
    return !egg.isHatched
  })
  const hatchedEggs = filter(eggs, (egg) => {
    return egg.isHatched
  })

  return (
    <MainContainer>
      <HeroContainer>
        <InnerContainer>
          <Heading>Welcome CryptoDragons Owners</Heading>
          <Subheading>
            Thank you for stopping by. You can use this form to get detailed
            info on dragons and eggs, including <b>Arena Strength</b>,{" "}
            <b>Arena Record</b>, <b>Blacklist Status</b>,{" "}
            <b>Total Trait Score</b>, and more.
          </Subheading>

          <Separator />

          <SearchForm setTab={setTab} />
        </InnerContainer>
      </HeroContainer>

      <TabsContainer>
        <Tab selected={tab === "dragons"} onClick={() => setTab("dragons")}>
          {`Dragons (${dragons.length})`} <div />
        </Tab>
        <Tab selected={tab === "eggs"} onClick={() => setTab("eggs")}>
          {`Eggs (${unhatchedEggs.length})`}
          <div />
        </Tab>
        <Tab selected={tab === "eggshells"} onClick={() => setTab("eggshells")}>
          {`Eggshells (${hatchedEggs.length})`}
          <div />
        </Tab>
      </TabsContainer>

      <ContentContainer>
        {tab === "dragons" && <Dragons dragons={dragons} />}
        {tab === "eggs" && <Eggs eggs={unhatchedEggs} />}
        {tab === "eggshells" && <Eggs eggs={hatchedEggs} />}
      </ContentContainer>
    </MainContainer>
  )
}

export default Home
