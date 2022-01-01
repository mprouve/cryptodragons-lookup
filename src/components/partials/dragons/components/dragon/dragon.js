import React from "react"
import IconButton from "@mui/material/IconButton"
import {
  MainContainer,
  Image,
  Name,
  ID,
  BadgeContainer,
  TypeContainer,
  TypeText,
  Tier,
  Badge,
  Separator,
  StatsContainer,
  Stat,
  StatIconContainer,
  StatContent,
  StatLabel,
  StatValue,
} from "./styled-components/dragon.js"

const styles = {
  link: {
    position: "absolute",
    top: ".5rem",
    right: ".5rem",
  },
}

const Dragon = ({ dragon }) => {
  const {
    id,
    isBlacklisted,
    type,
    name,
    totalBreed,
    imageURL,
    tier,
    fatherId,
    motherId,
    strength,
    fifteens,
    totalTraits,
    battleAmount,
    battleWinsAmount,
    status,
  } = dragon

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
      <a
        href={`https://cryptodragons.com/dragon/${id}`}
        target="_blank"
        rel="noreferrer">
        <IconButton sx={styles.link}>
          <span className="material-icons">launch</span>
        </IconButton>
      </a>

      <Image src={imageURL} alt={`CryptoDragon image for dragon #${id}`} />

      <ID>{`#${id}`}</ID>
      <Name>{name}</Name>

      <BadgeContainer>
        <TypeContainer
          color={getTypeColor()}
          style={
            type === "Common" ? { padding: "0.5rem 0.5rem 0.5rem 0.5rem" } : {}
          }>
          <TypeText>{type}</TypeText>

          {type !== "Common" && <Tier color={getTypeColor()}>{tier}</Tier>}
        </TypeContainer>

        <Badge show={isBlacklisted} backgroundColor={"#333"}>
          Blacklisted
        </Badge>

        <Badge show={!fatherId && !motherId} backgroundColor={"red"}>
          Firstborn
        </Badge>
      </BadgeContainer>

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
            <span className="material-icons">emoji_events</span>
          </StatIconContainer>

          <StatContent>
            <StatLabel>Arena W/L</StatLabel>
            <StatValue>{`${battleWinsAmount} - ${
              battleAmount - battleWinsAmount
            }`}</StatValue>
          </StatContent>
        </Stat>

        <Stat>
          <StatIconContainer>
            <span className="material-icons">bloodtype</span>
          </StatIconContainer>

          <StatContent>
            <StatLabel>Trait Score</StatLabel>
            <StatValue>{`${totalTraits}/375`}</StatValue>
          </StatContent>
        </Stat>

        <Stat>
          <StatIconContainer>
            <span className="fifteen">15</span>
          </StatIconContainer>

          <StatContent>
            <StatLabel>#15 Traits</StatLabel>
            <StatValue>{`${fifteens}`}</StatValue>
          </StatContent>
        </Stat>

        <Stat>
          <StatIconContainer>
            <span className="material-icons">egg</span>
          </StatIconContainer>

          <StatContent>
            <StatLabel>Breeds</StatLabel>
            <StatValue>{totalBreed}</StatValue>
          </StatContent>
        </Stat>

        <Stat>
          <StatIconContainer>
            <span className="material-icons">info</span>
          </StatIconContainer>

          <StatContent>
            <StatLabel>Status</StatLabel>
            <StatValue>{status}</StatValue>
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
