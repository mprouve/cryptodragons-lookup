import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getDragons } from '../../../redux/thunks/dragons/get-dragons.js'
import { getEggs } from '../../../redux/thunks/eggs/get-eggs.js'
import { dragonsQueryActions } from '../../../redux/action-creators/dragons-query.js'
import { eggsQueryActions } from '../../../redux/action-creators/eggs-query.js'
import filter from 'lodash/filter'
import { useSelector } from 'react-redux'
import Button from '@mui/material/Button'
import Dragons from '../../partials/dragons/dragons.js'
import Eggs from '../../partials/eggs/eggs.js'
import {
  MainContainer,
  BannerOuterContainer,
  BannerInnerContainer,
  BannerText,
  UserContainer,
  UserAddress,
  TabsContainer,
  Tab,
  ContentContainer
} from './styled-components/user.js'

const styles = {
  chromeButton: {
    display: 'inline-block',
    width: '12rem',
    minHeight: '2.3rem',
    height: '2.3rem',
    margin: '0 .5rem',
    lineHeight: '1rem',
    verticalAlign: 'middle'
  }
}

const User = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tab, setTab] = useState('dragons')
  const dragons = useSelector(({ dragons }) => dragons)
  const eggs = useSelector(({ eggs }) => eggs)
  const params = useParams()
  const dispatch = useDispatch()
  const unhatchedEggs = filter(eggs, (egg) => {
    return !egg.isHatched
  })
  const hatchedEggs = filter(eggs, (egg) => {
    return egg.isHatched
  })

  useEffect(() => {
    if (params.address && isLoading) {
      dispatch(
        getDragons({
          owner: params.address,
          currentUserId: params.address,
          status: 'arena%2Cfight%2Csale%2Csiring%2Cnone',
          showBlacklisted: true,
          isMock: false,
          limit: 0,
          page: 1
        })
      )
        .then((data1) => {
          if (!data1.error) {
            console.log('[SUCCESS]: ', data1.message)

            dispatch(
              getEggs({
                owner: params.address,
                currentUserId: params.address,
                isMock: false,
                limit: 0,
                page: 1
              })
            ).then((data2) => {
              if (!data1.error) {
                console.log('[SUCCESS]: ', data1.message)

                dispatch(dragonsQueryActions.clear())
                dispatch(eggsQueryActions.clear())
              } else {
                console.log('[FAIL]: ', data1.message)
              }

              setIsLoading(false)
            })
          } else {
            console.log('[FAIL]: ', data1.message)

            setIsLoading(false)
          }
        })
        .catch((e) => {
          console.log('ERROR]: ', e)

          setIsLoading(false)
        })
    }
  }, [dispatch, isLoading, params.address])

  return (
    <MainContainer>
      <BannerOuterContainer>
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

          <Button color="secondary" variant="outlined" sx={styles.chromeButton}>
            Chrome Extension
          </Button>
        </BannerInnerContainer>
      </BannerOuterContainer>

      <UserContainer>
        <UserAddress>User Address - {params.address}</UserAddress>
      </UserContainer>

      <TabsContainer>
        <Tab selected={tab === 'dragons'} onClick={() => setTab('dragons')}>
          {`Dragons (${dragons.length})`} <div />
        </Tab>

        <Tab selected={tab === 'eggs'} onClick={() => setTab('eggs')}>
          {`Eggs (${unhatchedEggs.length})`}
          <div />
        </Tab>

        <Tab selected={tab === 'eggshells'} onClick={() => setTab('eggshells')}>
          {`Eggshells (${hatchedEggs.length})`}
          <div />
        </Tab>
      </TabsContainer>

      <ContentContainer>
        {tab === 'dragons' && <Dragons dragons={dragons} />}
        {tab === 'eggs' && <Eggs eggs={unhatchedEggs} isHatched={false} />}
        {tab === 'eggshells' && <Eggs eggs={hatchedEggs} isHatched={true} />}
      </ContentContainer>
    </MainContainer>
  )
}

export default User
