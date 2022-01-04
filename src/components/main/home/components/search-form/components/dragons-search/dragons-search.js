import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDragons } from '../../../../../../../redux/thunks/dragons/get-dragons.js'
import { dragonsQueryActions } from '../../../../../../../redux/action-creators/dragons-query.js'
import { eggsQueryActions } from '../../../../../../../redux/action-creators/eggs-query.js'
import { eggsActions } from '../../../../../../../redux/action-creators/eggs.js'
import TypeToggle from './components/type-toggle/type-toggle.js'
import StatusToggle from './components/status-toggle/status-toggle.js'
import SortToggle from './components/sort-toggle/sort-toggle.js'
import LimitSelect from '../../../../../../partials/limit-select/limit-select.js'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import { Form, OptionsContainer } from './styled-components/dragons-search.js'

const getConditionalQueryKeys = (sortBy) => {
  const queryKeys = {
    sortBy,
    customSort: ''
  }

  if (sortBy === 'strength' || sortBy === 'fifteens' || sortBy === 'totalTraits') {
    queryKeys.sortBy = ''
    queryKeys.customSort = sortBy
  }

  return queryKeys
}

const styles = {
  button: {
    display: 'block',
    width: '100%',
    height: '2.7rem',
    marginTop: '1rem'
  },
  loadMoreButton: {
    marginTop: '1rem',
    color: '#eee',
    borderColor: '#eee',
    '&:hover': {
      backgroundColor: '#eee',
      borderColor: '#eee',
      color: '#333'
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

const DragonsSearch = ({ processing, setProcessing, setError }) => {
  const [typeFilter, setTypeFilter] = useState([])
  const [status, setStatus] = useState(['sale', 'siring', 'none'])
  const [sortBy, setSortBy] = useState('Type')
  const [sortDirection, setSortDirection] = useState('ASC')
  const [limit, setLimit] = useState(25)
  const dragons = useSelector(({ dragons }) => dragons)
  const dragonsQuery = useSelector(({ dragonsQuery }) => dragonsQuery)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    setProcessing(true)

    const query = {
      ...getConditionalQueryKeys(sortBy),
      typeFilter: typeFilter.join('%2C'),
      status: status.join('%2C'),
      sortDirection,
      page: 1,
      limit,
      from: 0,
      showBlacklisted: true,
      isMock: false
    }

    dispatch(getDragons(query, false))
      .then((data) => {
        if (!data.error) {
          console.log('[SUCCESS]: ', data.message)

          dispatch(
            dragonsQueryActions.set({
              ...query,
              totalItems: data.data.totalItems
            })
          )
          dispatch(eggsQueryActions.clear())
          dispatch(eggsActions.clear())
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

  const handleLoadMore = () => {
    setProcessing(true)

    const oldPage = dragonsQuery.page
    const from = dragonsQuery.limit * oldPage
    const page = oldPage + 1
    const query = { ...dragonsQuery, from, page }

    dispatch(getDragons(query, true))
      .then((data) => {
        if (!data.error) {
          console.log('[SUCCESS]: ', data.message)

          dispatch(dragonsQueryActions.set(query))
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

  return (
    <Form onSubmit={handleSubmit}>
      <OptionsContainer>
        <SortToggle
          sortBy={sortBy}
          setSortBy={setSortBy}
          sortDirection={sortDirection}
          setSortDirection={setSortDirection}
          setLimit={setLimit}
        />
        <TypeToggle typeFilter={typeFilter} setTypeFilter={setTypeFilter} />
        <StatusToggle status={status} setStatus={setStatus} />
        <LimitSelect limit={limit} setLimit={setLimit} />
      </OptionsContainer>

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

      {dragons.length > 0 &&
        Object.keys(dragonsQuery).length > 0 &&
        dragons.length < dragonsQuery.totalItems && (
          <Button
            fullWidth
            variant="outlined"
            sx={styles.loadMoreButton}
            disabled={processing}
            onClick={handleLoadMore}>
            {processing ? (
              <CircularProgress color="secondary" sx={styles.circularProgress} />
            ) : (
              `Load ${dragonsQuery.limit} More`
            )}
          </Button>
        )}
    </Form>
  )
}

export default DragonsSearch
