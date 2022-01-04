import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getEggs } from '../../../redux/thunks/eggs/get-eggs.js'
import { eggsQueryActions } from '../../../redux/action-creators/eggs-query.js'
import Egg from './components/egg/egg.js'
import arrayToCSV from '../../../utils/functions/array-to-csv.js'
import exportCSV from '../../../utils/functions/export-csv.js'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import { MainContainer, NoResults } from './styled-components/eggs.js'

const styles = {
  circularProgress: {
    display: 'block',
    width: '17px !important',
    height: '17px !important',
    margin: '.1rem auto 0 auto',
    '& svg': {
      color: '#333'
    }
  }
}

const Eggs = ({ eggs, isHatched }) => {
  const [processing, setProcessing] = useState(false)
  const eggsQuery = useSelector(({ eggsQuery }) => eggsQuery)
  const dispatch = useDispatch()

  const handleLoadMore = () => {
    setProcessing(true)

    const oldPage = eggsQuery.page
    const from = eggsQuery.limit * oldPage
    const page = oldPage + 1
    const query = { ...eggsQuery, isHatched, from, page }

    dispatch(getEggs(query, true))
      .then((data) => {
        if (!data.error) {
          console.log('[SUCCESS]: ', data.message)

          dispatch(eggsQueryActions.set(query))
        } else {
          console.log('[FAIL]: ', data.message)
        }

        setProcessing(false)
      })
      .catch((e) => {
        console.log('[ERROR]: ', e)

        setProcessing(false)
      })
  }

  const handleExport = () => {
    const csv = arrayToCSV(eggs)

    exportCSV(csv, `${isHatched ? 'hatched' : 'unhatched'}-eggs.csv`, document)
  }

  return (
    <MainContainer>
      {eggs.length > 0 && (
        <div>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            sx={{ maxWidth: '20rem', margin: '0.5rem auto' }}
            onClick={handleExport}
            disabled={processing}>
            {processing ? (
              <CircularProgress color="secondary" sx={styles.circularProgress} />
            ) : (
              'Export to CSV'
            )}
          </Button>
        </div>
      )}

      {eggs.length > 0 &&
        eggs.map((egg) => {
          return <Egg key={egg.id} egg={egg} />
        })}

      {eggs.length === 0 && (
        <NoResults>
          No Eggs Returned
          <br />
          ...
        </NoResults>
      )}

      {eggs.length > 0 && Object.keys(eggsQuery).length > 0 && (
        <div>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            sx={{ maxWidth: '50rem', marginTop: '3rem' }}
            onClick={handleLoadMore}
            disabled={processing}>
            {processing ? (
              <CircularProgress color="secondary" sx={styles.circularProgress} />
            ) : (
              'Load More'
            )}
          </Button>
        </div>
      )}
    </MainContainer>
  )
}

export default Eggs
