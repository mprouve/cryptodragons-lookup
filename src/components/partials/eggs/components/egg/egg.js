import React from "react"
// import filter from "lodash/filter"
import {
  MainContainer,
  Image,
  Name,
  ID,
  // TypeContainer,
  // TypeText,
  // Tier,
  Separator,
  StatsContainer,
  Stat,
  StatIconContainer,
  StatContent,
  StatLabel,
  StatValue,
} from "./styled-components/egg.js"

const Egg = ({ egg }) => {
  const { id, name, isHatched, dragonId, type, imageURL } = egg
  // const { tier, strength } = getTierAndStrength(type, genome)

  // const getTypeColor = () => {
  //   switch (dragon.type) {
  //     case "Common":
  //       return "#999"
  //     case "Rare":
  //       return "blue"
  //     case "Epic":
  //       return "purple"
  //     case "Legendary":
  //       return "orange"
  //     default:
  //       return "#999"
  //   }
  // }

  return (
    <MainContainer>
      <Image src={imageURL} alt={`CryptoDragon image for egg #${id}`} />

      <ID>{`#${id}`}</ID>
      <Name>{name}</Name>
      {/* <TypeContainer
        color={getTypeColor()}
        style={
          type === "Common" ? { padding: "0.5rem 0.5rem 0.5rem 0.5rem" } : {}
        }>
        <TypeText>{type}</TypeText>

        {type !== "Common" && <Tier color={getTypeColor()}>{tier}</Tier>}
      </TypeContainer> */}

      <Separator />

      <StatsContainer>
        <Stat>
          <StatIconContainer>
            <span className="material-icons">egg_alt</span>
          </StatIconContainer>

          <StatContent>
            <StatLabel>Hatched</StatLabel>
            <StatValue>{isHatched ? "Yes" : "No"}</StatValue>
          </StatContent>
        </Stat>

        <Stat>
          <StatIconContainer>
            <span className="material-icons">info</span>
          </StatIconContainer>

          <StatContent>
            <StatLabel>Type</StatLabel>
            <StatValue>{type}</StatValue>
          </StatContent>
        </Stat>

        <Stat>
          <StatIconContainer>
            <span className="material-icons">egg</span>
          </StatIconContainer>

          <StatContent>
            <StatLabel>Dragon ID</StatLabel>
            <StatValue>{dragonId || "N/A"}</StatValue>
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

export default Egg
