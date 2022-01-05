import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import {
  MainContainer,
  StatsContainer,
  Stat,
  StatIconContainer,
  StatContent,
  StatLabel,
  StatValue
} from './styled-components/traits.js'

const styles = {
  box: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: '40rem',
    padding: '1rem',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '@media(max-width: 650px)': {
      width: '30rem'
    },
    '@media(max-width: 450px)': {
      width: '100%'
    }
  },
  innerModal: {
    backgroundColor: '#fff',
    padding: '0rem 1.5rem 1.5rem 1.5rem',
    maxHeight: '60rem',
    borderRadius: '.3rem',
    overflow: 'auto',
    boxShadow: '0 0 12px 4px #555',
    position: 'relative'
  },
  close: {
    position: 'absolute',
    top: '1rem',
    zIndex: '1'
  }
}

const genes = [
  'Head',
  'Eyebrows',
  'Eyes',
  'Eyes Color',
  'Ears',
  'Nose',
  'Dragon Color',
  'Mouth, Teeth',
  'Tail',
  'Hands and Feet',
  'Belly',
  'Upper Side of Head',
  'Tail and Wings Color',
  'Wings',
  'Horns',
  "Belly / Belly's Texture",
  'Arms / Legs / Claw w/ Spikes',
  'Tail w/ Spikes',
  'Wings w/ Texture',
  'Secret Gene',
  'Comb on Head',
  'Environment 1',
  'Environment 2',
  'Element',
  'Alphabet Letter'
]

const Traits = ({ genome }) => {
  const [open, setOpen] = useState(false)
  const [maxHeight, setMaxHeight] = useState('60rem')
  const col1 = []
  const col2 = []

  useEffect(() => {
    if (open) {
      const newMaxHeight = window.innerHeight * 0.9

      setMaxHeight(newMaxHeight + 'px')
    }
  }, [open])

  for (let i = 0; i < genome.length; i++) {
    const gene = genes[i]
    const trait = genome[i]

    const jsx = (
      <Stat key={gene}>
        <StatIconContainer backgroundColor={trait > 0 || i < 15 ? '#f3e6ff' : '#eee'}>
          <span className="material-icons" style={trait > 0 || i < 15 ? { color: '#6900cc' } : {}}>
            fingerprint
          </span>
        </StatIconContainer>

        <StatContent>
          <StatLabel>{gene}</StatLabel>
          <StatValue>#{trait}</StatValue>
        </StatContent>
      </Stat>
    )

    if (i <= 12) col1.push(jsx)
    if (i > 12) col2.push(jsx)
  }

  return (
    <MainContainer>
      <Button
        variant="outlined"
        color="primary"
        fullWidth
        onClick={() => setOpen(true)}
        sx={{ marginTop: '.5rem' }}>
        View Traits
      </Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="traits-modal"
        aria-describedby="modal-for-traits"
        sx={styles.modal}>
        <Box sx={styles.box}>
          <div style={{ ...styles.innerModal, ...{ maxHeight } }}>
            <IconButton sx={{ ...styles.close, right: '1rem' }} onClick={() => setOpen(false)}>
              <span className="material-icons">close</span>
            </IconButton>

            <StatsContainer>
              <div>{col1}</div>
              <div>{col2}</div>
            </StatsContainer>
          </div>
        </Box>
      </Modal>
    </MainContainer>
  )
}

export default Traits
