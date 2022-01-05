import React from 'react'
import IconButton from '@mui/material/IconButton'
// import filter from "lodash/filter"
import {
  MainContainer,
  ImageContainer,
  FloatingMeta,
  Image,
  Name,
  ID,
  Separator,
  StatsContainer,
  Stat,
  StatIconContainer,
  StatContent,
  StatLabel,
  StatValue
} from './styled-components/egg.js'

const styles = {
  link: {
    position: 'absolute',
    top: '.5rem',
    zIndex: '1'
  }
}

const Egg = ({ egg }) => {
  const { id, price, name, isHatched, dragonId, type, status, imageURL, ownerId } = egg

  return (
    <MainContainer>
      {price !== '0' && (
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

      <a href={`https://cryptodragons.com/egg/${id}`} target="_blank" rel="noreferrer">
        <IconButton sx={{ ...styles.link, right: '.5rem' }}>
          <span className="material-icons">launch</span>
        </IconButton>
      </a>

      <a href={`/user/${ownerId}`} target="_blank" rel="noreferrer">
        <IconButton sx={{ ...styles.link, right: '3rem' }}>
          <span className="material-icons">person_search</span>
        </IconButton>
      </a>

      <ImageContainer>
        <Image src={imageURL} alt={`CryptoDragon image for egg #${id}`} loading="lazy" />
      </ImageContainer>

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
            <StatValue>{isHatched ? 'Yes' : 'No'}</StatValue>
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
            {dragonId ? (
              <StatValue>
                <a
                  href={`/dragon/${dragonId}`}
                  target="_blank"
                  rel="noreferrer">{`#${dragonId}`}</a>
              </StatValue>
            ) : (
              <StatValue>None</StatValue>
            )}
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
