import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import find from 'lodash/find'
import BattleIcon from '../../../media/images/icons/crossed.png'
// import { useQuery } from "react-router-dom"
import ArenaForm from './components/arena-form/arena-form.js'
// import Button from '@mui/material/Button'
import {
  MainContainer,
  // BannerOuterContainer,
  // BannerInnerContainer,
  // BannerText,
  HeroContainer,
  InnerContainer,
  Heading,
  Subheading,
  Separator,
  ContentContainer,
  ContentHeader,
  DragonOuterContainer,
  ProbabilityContainer,
  DragonContainer,
  ImageContainer,
  Image,
  ID,
  Name,
  BattleImage,
  StatSeparator,
  StatsContainer,
  Stat,
  StatIconContainer,
  StatContent,
  StatLabel,
  StatValue,
  NoResults
} from './styled-components/arena-simulator.js'
import theme from '../../../res/theme.js'

// const styles = {
//   chromeButton: {
//     display: 'inline-block',
//     width: '12rem',
//     minHeight: '2.3rem',
//     height: '2.3rem',
//     margin: '0 .5rem',
//     lineHeight: '1rem',
//     verticalAlign: 'middle'
//   }
// }

const ArenaSimulator = () => {
  const [didSimulate, setDidSimulate] = useState(false)
  const [dragonOne, setDragonOne] = useState('')
  const [dragonTwo, setDragonTwo] = useState('')
  const dragons = useSelector(({ dragons }) => dragons)
  const dragonObjOne = find(dragons, { id: parseInt(dragonOne) }) || null
  const dragonObjTwo = find(dragons, { id: parseInt(dragonTwo) }) || null
  const dragonOneProbs =
    dragonObjOne && dragonObjTwo
      ? Math.round(
          (dragonObjOne.strength / (dragonObjOne.strength + dragonObjTwo.strength) +
            Number.EPSILON) *
            10000
        ) / 100
      : null
  const dragonTwoProbs =
    dragonObjOne && dragonObjTwo
      ? Math.round(
          (dragonObjTwo.strength / (dragonObjOne.strength + dragonObjTwo.strength) +
            Number.EPSILON) *
            10000
        ) / 100
      : null

  const getBGColor = (prob) => {
    if (prob > 50) {
      return '#00cc66'
    } else if (prob < 50) {
      return theme.palette.primary
    } else {
      return '#999'
    }
  }

  console.log({ dragonOne, dragonObjOne, dragonTwo, dragonObjTwo })

  return (
    <MainContainer>
      {/* <BannerOuterContainer>
        <BannerInnerContainer>
          <BannerText>
            Have you downloaded{' '}
            <a
              href="https://discordapp.com/users/554028295990018050"
              target="_blank"
              rel="noreferrer">
              @angrymushroom
            </a>
            's Google Chrome Extension?
          </BannerText>

          <a
            href="https://chrome.google.com/webstore/detail/dragon-stat-calculator/npbbffpmhkbcebmamddilhalnbppecmh?hl=en-US&authuser=1"
            target="_blank"
            rel="noreferrer">
            <Button color="secondary" variant="outlined" sx={styles.chromeButton}>
              Chrome Extension
            </Button>
          </a>
        </BannerInnerContainer>
      </BannerOuterContainer> */}

      <HeroContainer>
        <InnerContainer>
          <Heading>Prepare Yourself for the Arena</Heading>
          <Subheading>
            Welcome to the CryptoDragons arena simulator! Here you can test up your matchups to
            determine your chances of victory against your opponent. Upon submission, we look at the
            dragons' arena scores and return the probabilities of victory for each dragon.
            <br />
            <br />
            May the best dragon win!
          </Subheading>

          <Separator />

          <ArenaForm
            setDidSimulate={setDidSimulate}
            dragonOne={dragonOne}
            setDragonOne={setDragonOne}
            dragonTwo={dragonTwo}
            setDragonTwo={setDragonTwo}
          />
        </InnerContainer>
      </HeroContainer>

      <ContentContainer>
        {didSimulate ? (
          <>
            {!dragonObjOne || !dragonObjTwo ? (
              <NoResults>We failed to simulate the arena battle. Please try again.</NoResults>
            ) : (
              <>
                <ContentHeader>Let's see how these dragons will fare in the Arena!</ContentHeader>

                <DragonOuterContainer>
                  <ProbabilityContainer backgroundColor={getBGColor(dragonOneProbs)}>
                    {dragonOneProbs}%
                  </ProbabilityContainer>

                  <DragonContainer>
                    <ImageContainer>
                      <Image
                        src={dragonObjOne.imageURL}
                        alt={`CryptoDragon image for dragon #${dragonObjOne.id}`}
                        loading="lazy"
                      />
                    </ImageContainer>

                    <ID>{`#${dragonObjOne.id}`}</ID>
                    <Name>{dragonObjOne.name}</Name>

                    <StatSeparator />

                    <StatsContainer>
                      <Stat>
                        <StatIconContainer>
                          <span className="material-icons">bolt</span>
                        </StatIconContainer>

                        <StatContent>
                          <StatLabel>Arena</StatLabel>
                          <StatValue>{dragonObjOne.strength}</StatValue>
                        </StatContent>
                      </Stat>
                    </StatsContainer>
                  </DragonContainer>
                </DragonOuterContainer>

                <BattleImage
                  src={BattleIcon}
                  alt={`Crossed Icon for two battling dragons.`}
                  loading="lazy"
                />

                <DragonOuterContainer>
                  <ProbabilityContainer backgroundColor={getBGColor(dragonTwoProbs)}>
                    {dragonTwoProbs}%
                  </ProbabilityContainer>

                  <DragonContainer>
                    <ImageContainer>
                      <Image
                        src={dragonObjTwo.imageURL}
                        alt={`CryptoDragon image for dragon #${dragonObjTwo.id}`}
                        loading="lazy"
                      />
                    </ImageContainer>

                    <ID>{`#${dragonObjTwo.id}`}</ID>
                    <Name>{dragonObjTwo.name}</Name>

                    <StatSeparator />

                    <StatsContainer>
                      <Stat>
                        <StatIconContainer>
                          <span className="material-icons">bolt</span>
                        </StatIconContainer>

                        <StatContent>
                          <StatLabel>Arena</StatLabel>
                          <StatValue>{dragonObjTwo.strength}</StatValue>
                        </StatContent>
                      </Stat>
                    </StatsContainer>
                  </DragonContainer>
                </DragonOuterContainer>
              </>
            )}
          </>
        ) : (
          <NoResults>Start your arena simulation above!</NoResults>
        )}
      </ContentContainer>
    </MainContainer>
  )
}

export default ArenaSimulator
