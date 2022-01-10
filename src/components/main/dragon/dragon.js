import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getDragon } from '../../../redux/thunks/dragons/get-dragon.js'
import { dragonsQueryActions } from '../../../redux/action-creators/dragons-query.js'
import { eggsQueryActions } from '../../../redux/action-creators/eggs-query.js'
import { useSelector } from 'react-redux'
// import Button from '@mui/material/Button'
import Dragons from '../../partials/dragons/dragons.js'
import {
  MainContainer,
  // BannerOuterContainer,
  // BannerInnerContainer,
  // BannerText,
  UserContainer,
  UserAddress,
  ContentContainer
} from './styled-components/dragon.js'

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

const Dragon = () => {
  const [isLoading, setIsLoading] = useState(true)
  const dragons = useSelector(({ dragons }) => dragons)
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    if (params.dragonId && isLoading) {
      dispatch(getDragon({ dragonId: params.dragonId, status: '' }))
        .then((data) => {
          if (!data.error) {
            console.log('[SUCCESS]: ', data.message)

            dispatch(dragonsQueryActions.clear())
            dispatch(eggsQueryActions.clear())
          } else {
            console.log('[FAIL]: ', data.message)
          }

          setIsLoading(false)
        })
        .catch((e) => {
          console.log('[ERROR]: ', e)

          setIsLoading(false)
        })
    }
  }, [dispatch, isLoading, params.dragonId])

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

      <UserContainer>
        <UserAddress>Dragon ID - #{params.dragonId}</UserAddress>
      </UserContainer>

      <ContentContainer>
        <Dragons dragons={dragons} />
      </ContentContainer>
    </MainContainer>
  )
}

export default Dragon
