import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getDragon } from '../../../../../redux/thunks/dragons/get-dragon.js'
import FormError from '../../../../form-error/form-error.js'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import { MainContainer, Form, Input } from './styled-components/arena-form.js'

const styles = {
  button: {
    display: 'block',
    width: '100%',
    height: '2.7rem',
    marginTop: '1rem'
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

const ArenaForm = ({ setDidSimulate, dragonOne, setDragonOne, dragonTwo, setDragonTwo }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isLoading) {
      if (searchParams.get('dragonOne')) {
        setDragonOne(searchParams.get('dragonOne'))
      }

      if (searchParams.get('dragonTwo')) {
        setDragonTwo(searchParams.get('dragonTwo'))
      }

      setIsLoading(false)
    }
  }, [
    isLoading,
    searchParams,
    searchParams.dragonOne,
    searchParams.dragonTwo,
    setDragonOne,
    setDragonTwo
  ])

  const handleSubmit = (e) => {
    e.preventDefault()

    setProcessing(true)

    dispatch(
      getDragon({ dragonId: dragonOne, status: '' }, { customMessage: 'Simulation successful!' })
    )
      .then((data1) => {
        if (!data1.error) {
          console.log('[SUCCESS]: ', data1.message)

          dispatch(
            getDragon(
              { dragonId: dragonTwo, status: '' },
              { addData: true, customMessage: 'Simulation successful!' }
            )
          ).then((data2) => {
            if (!data2.error) {
              console.log('[SUCCESS]: ', data1.message)

              setDidSimulate(true)
              setError('')
            } else {
              console.log('[FAIL]: ', data2.message)

              setError(data2.message)
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
    <MainContainer>
      <Form onSubmit={handleSubmit}>
        <FormError message={error} />

        <Input
          name="dragon-one"
          type="text"
          placeholder={'Please enter a dragon ID'}
          value={dragonOne}
          onChange={(e) => setDragonOne(e.target.value)}
        />

        <Input
          name="dragon-two"
          type="text"
          placeholder={'Please enter another dragon ID'}
          value={dragonTwo}
          onChange={(e) => setDragonTwo(e.target.value)}
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
            'Simulate'
          )}
        </Button>
      </Form>
    </MainContainer>
  )
}

export default ArenaForm
