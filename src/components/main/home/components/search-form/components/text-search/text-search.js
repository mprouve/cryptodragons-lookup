import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getDragons } from '../../../../../../../redux/thunks/dragons/get-dragons.js'
import { getEggs } from '../../../../../../../redux/thunks/eggs/get-eggs.js'
import { getDragon } from '../../../../../../../redux/thunks/dragons/get-dragon.js'
import { getEgg } from '../../../../../../../redux/thunks/eggs/get-egg.js'
import { dragonsQueryActions } from '../../../../../../../redux/action-creators/dragons-query.js'
import { eggsQueryActions } from '../../../../../../../redux/action-creators/eggs-query.js'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import { Form, Input } from './styled-components/text-search.js'

const styles = {
  button: {
    display: 'inline-block',
    width: '23%',
    height: '2.7rem',
    verticalAlign: 'middle',
    marginLeft: '3%',
    '@media (max-width: 700px)': {
      display: 'block',
      width: '100%',
      margin: '1rem auto 0 auto'
    }
  },
  circularProgress: {
    display: 'block',
    width: '17px !important',
    height: '17px !important',
    margin: '.1rem auto 0 auto',
    '& svg': {
      color: 'white'
    }
  }
}

const TextSearch = ({ searchType, processing, setProcessing, setError }) => {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  const getPlaceholder = () => {
    switch (searchType) {
      case 'dragon':
        return 'Please enter your dragon ID'
      case 'egg':
        return 'Please enter your egg ID'
      case 'address':
        return 'Please enter your wallet address'
      default:
        return 'Please enter your dragon ID'
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (searchType === 'dragon') {
      handleGetDragon()
    } else if (searchType === 'egg') {
      handleGetEgg()
    } else if (searchType === 'address') {
      handleGetUserEggsAndDragons()
    }
  }

  const handleGetDragon = () => {
    setProcessing(true)

    dispatch(getDragon({ dragonId: search, status: '' }))
      .then((data) => {
        if (!data.error) {
          console.log('[SUCCESS]: ', data.message)

          dispatch(dragonsQueryActions.clear())
          dispatch(eggsQueryActions.clear())
          setError('')
        } else {
          console.log('[FAIL]: ', data.message)

          setError(data.message)
        }

        setProcessing(false)
      })
      .catch((e) => {
        console.log('[ERROR]: ', e)

        setProcessing(false)
      })
  }

  const handleGetEgg = () => {
    setProcessing(true)

    dispatch(getEgg({ eggId: search }))
      .then((data) => {
        if (!data.error) {
          console.log('[SUCCESS]: ', data.message)

          dispatch(dragonsQueryActions.clear())
          dispatch(eggsQueryActions.clear())
          setError('')
        } else {
          console.log('[FAIL]: ', data.message)

          setError(data.message)
        }

        setProcessing(false)
      })
      .catch((e) => {
        console.log('[ERROR]: ', e)

        setProcessing(false)
      })
  }

  const handleGetUserEggsAndDragons = () => {
    setProcessing(true)

    dispatch(
      getDragons({
        owner: search,
        currentUserId: search,
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
            getEggs({ owner: search, currentUserId: search, isMock: false, limit: 0, page: 1 })
          ).then((data2) => {
            if (!data1.error) {
              console.log('[SUCCESS]: ', data1.message)

              dispatch(dragonsQueryActions.clear())
              dispatch(eggsQueryActions.clear())
              setError('')
            } else {
              console.log('[FAIL]: ', data1.message)

              setError(data1.message)
            }

            setProcessing(false)
          })
        } else {
          console.log('[FAIL]: ', data1.message)

          setError(data1.message)
          setProcessing(false)
        }
      })
      .catch((e) => {
        setProcessing(false)
      })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="search-input"
        type="text"
        placeholder={getPlaceholder()}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={styles.button}
        disabled={processing}>
        {processing ? (
          <CircularProgress color="secondary" sx={styles.circularProgress} />
        ) : (
          'Search'
        )}
      </Button>
    </Form>
  )
}

export default TextSearch
