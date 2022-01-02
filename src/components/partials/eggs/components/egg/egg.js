import React from "react"
import IconButton from "@mui/material/IconButton"
// import filter from "lodash/filter"
import {
  MainContainer,
  FloatingMeta,
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

const styles = {
  link: {
    position: "absolute",
    top: ".5rem",
    right: ".5rem",
  },
}

const Egg = ({ egg }) => {
  const {
    id,
    price,
    name,
    isHatched,
    dragonId,
    type,
    status,
    imageURL,
  } = egg

  return (
    <MainContainer>
      {price !== "0" && (
        <FloatingMeta>
          {/* <span className="material-icons">favorite</span>
        <span
          style={
            price !== "0" ? { marginRight: "1rem" } : {}
          }>{`${likes}`}</span> */}

          <span className="material-icons">local_offer</span>
          <span>{`${price} ETH`}</span>
        </FloatingMeta>
      )}

      <a
        href={`https://cryptodragons.com/egg/${id}`}
        target="_blank"
        rel="noreferrer">
        <IconButton sx={styles.link}>
          <span className="material-icons">launch</span>
        </IconButton>
      </a>

      <Image src={imageURL} alt={`CryptoDragon image for egg #${id}`} />

      <ID>{`#${id}`}</ID>
      <Name>{name}</Name>

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
            <span className="material-icons">scatter_plot</span>
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

        <Stat>
          <StatIconContainer>
            <span className="material-icons">info</span>
          </StatIconContainer>

          <StatContent>
            <StatLabel>Status</StatLabel>
            <StatValue>{status}</StatValue>
          </StatContent>
        </Stat>
      </StatsContainer>
    </MainContainer>
  )
}

export default Egg
