import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getEgg } from '../../../redux/thunks/eggs/get-egg.js'
import { dragonsQueryActions } from '../../../redux/action-creators/dragons-query.js'
import { eggsQueryActions } from '../../../redux/action-creators/eggs-query.js'
import { useSelector } from 'react-redux'
// import Button from '@mui/material/Button'
import Eggs from '../../partials/eggs/eggs.js'
import {
  MainContainer,
  // BannerOuterContainer,
  // BannerInnerContainer,
  // BannerText,
  UserContainer,
  UserAddress,
  ContentContainer
} from './styled-components/egg.js'

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

const Egg = () => {
  const [isLoading, setIsLoading] = useState(true)
  const eggs = useSelector(({ eggs }) => eggs)
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    if (params.eggId && isLoading) {
      dispatch(getEgg({ eggId: params.eggId }))
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
  }, [dispatch, isLoading, params.eggId])

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
        <UserAddress>Egg ID - #{params.eggId}</UserAddress>
      </UserContainer>

      <ContentContainer>
        <Eggs eggs={eggs} />
      </ContentContainer>
    </MainContainer>
  )
}

export default Egg
