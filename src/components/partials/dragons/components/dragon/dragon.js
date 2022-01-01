import React from "react"
import getTierAndStrength from "../../../../../utils/functions/get-tier-and-strength.js"
import getTraitsMeta from "../../../../../utils/functions/get-traits-meta.js"
// import filter from "lodash/filter"
import {
  MainContainer,
  Image,
  Name,
  ID,
  TypeContainer,
  TypeText,
  Tier,
  Separator,
  StatsContainer,
  Stat,
  StatIconContainer,
  StatContent,
  StatLabel,
  StatValue,
} from "./styled-components/dragon.js"

const Dragon = ({ dragon }) => {
  const { id, type, name, totalBreed, imageURL, genome } = dragon
  const { tier, strength } = getTierAndStrength(type, genome)

  const getTypeColor = () => {
    switch (dragon.type) {
      case "Common":
        return "#999"
      case "Rare":
        return "blue"
      case "Epic":
        return "purple"
      case "Legendary":
        return "orange"
      default:
        return "#999"
    }
  }

  return (
    <MainContainer>
      <Image src={imageURL} alt={`CryptoDragon image for dragon #${id}`} />

      <ID>{`#${id}`}</ID>
      <Name>{name}</Name>
      <TypeContainer
        color={getTypeColor()}
        style={
          type === "Common" ? { padding: "0.5rem 0.5rem 0.5rem 0.5rem" } : {}
        }>
        <TypeText>{type}</TypeText>

        {type !== "Common" && <Tier color={getTypeColor()}>{tier}</Tier>}
      </TypeContainer>

      <Separator />

      <StatsContainer>
        <Stat>
          <StatIconContainer>
            <span className="material-icons">bolt</span>
          </StatIconContainer>

          <StatContent>
            <StatLabel>Arena</StatLabel>
            <StatValue>{strength}</StatValue>
          </StatContent>
        </Stat>

        <Stat>
          <StatIconContainer>
            <span className="material-icons">bloodtype</span>
          </StatIconContainer>

          <StatContent>
            <StatLabel>Trait Score</StatLabel>
            <StatValue>{`${getTraitsMeta(genome).total}/375`}</StatValue>
          </StatContent>
        </Stat>

        <Stat>
          <StatIconContainer>
            <span className="fifteen">15</span>
          </StatIconContainer>

          <StatContent>
            <StatLabel>#15 Traits</StatLabel>
            <StatValue>{`${getTraitsMeta(genome).fifteens}`}</StatValue>
          </StatContent>
        </Stat>

        {/* <Stat>
          <StatIconContainer>
            <span className="material-icons">info</span>
          </StatIconContainer>

          <StatContent>
            <StatLabel>Status</StatLabel>
            <StatValue>{status}</StatValue>
          </StatContent>
        </Stat> */}

        <Stat>
          <StatIconContainer>
            <span className="material-icons">egg</span>
          </StatIconContainer>

          <StatContent>
            <StatLabel>Breeds</StatLabel>
            <StatValue>{totalBreed}</StatValue>
          </StatContent>
        </Stat>

        {/* <Stat>
          <StatIconContainer>
            <span className="material-icons">lock</span>
          </StatIconContainer>

          <StatContent>
            <StatLabel>Locked</StatLabel>
            <StatValue>{isLocked ? "Yes" : "No"}</StatValue>
          </StatContent>
        </Stat> */}
      </StatsContainer>
    </MainContainer>
  )
}

export default Dragon
