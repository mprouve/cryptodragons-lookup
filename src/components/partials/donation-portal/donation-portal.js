import React, { useState } from 'react'
import { ethers } from 'ethers'
import { ClickAwayListener } from '@mui/material'
import MetamaskLogo from '../../../media/images/branding/metamask/metamask-logo.png'
import Portal from '../../portal/portal.js'
import FormError from '../../form-error/form-error.js'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import {
  MainContainer,
  InnerContainer,
  Header,
  Subheader,
  Form,
  WalletAddress,
  EtherscanLink,
  Input,
  BrandingImage,
  TransactionsHeader,
  Transaction
} from './styled-components/donation-portal.js'
import { useEffect } from 'react'

const styles = {
  button: {
    display: 'block',
    width: '100%',
    height: '2.7rem',
    marginTop: '1rem'
  },
  closeButton: {
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

const DonationPortal = ({ setOpen }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [noWalletMessage, setNoWalletMessage] = useState('')
  const [amount, setAmount] = useState('')
  const [txs, setTxs] = useState([])
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState('')
  const [maxHeight, setMaxHeight] = useState('60rem')

  useEffect(() => {
    if (isLoading) {
      const newMaxHeight = window.innerHeight * 0.9

      if (!window.ethereum) {
        setNoWalletMessage('No crypto wallet found. Please install one.')
      }

      setMaxHeight(newMaxHeight + 'px')
      setIsLoading(false)
    }
  }, [isLoading])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setProcessing(true)

    try {
      // Ask MetaMask for permission to communicate with our application. (User confirmation)
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      // Establish connection to crypto provider
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      // Call function getSigner on provider to allow provider to give access to the signer
      const signer = provider.getSigner()
      // Check if wallet address is valid
      ethers.utils.getAddress(process.env.REACT_APP_ETH_WALLET)
      // Attempt to send Transaction
      const tx = await signer.sendTransaction({
        to: process.env.REACT_APP_ETH_WALLET,
        value: ethers.utils.parseEther(amount)
      })

      setTxs([tx])
      setProcessing(false)
    } catch (err) {
      setError(err.message)
      setProcessing(false)
    }
  }

  return (
    <Portal>
      <MainContainer>
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <InnerContainer maxHeight={maxHeight}>
            <Header>Thank you for your consideration!</Header>
            <Subheader>
              I greatly appreciate your continued feedback and participation. Any donation will go a
              long ways in allowing me to work more frequently on <b>CryptoDragons Lookup</b>. I'm
              excited to implement all our ideas so we can grow CryptoDragons together!
            </Subheader>

            {noWalletMessage ? (
              <FormError
                message={noWalletMessage}
                variant="outlined"
                style={{ marginTop: '2rem', textAlign: 'center' }}
              />
            ) : (
              <>
                {txs.length === 0 ? (
                  <Form onSubmit={handleSubmit}>
                    <FormError message={error} variant="outlined" />

                    <WalletAddress>{process.env.REACT_APP_ETH_WALLET}</WalletAddress>
                    <div style={{ textAlign: 'center' }}>
                      <EtherscanLink
                        href={`https://etherscan.io/address/${process.env.REACT_APP_ETH_WALLET}`}
                        target="_blank"
                        rel="noreferrer">
                        View on Etherscan
                      </EtherscanLink>
                    </div>

                    <Input
                      name="amount"
                      type="text"
                      placeholder={'Please enter an amount in ETH'}
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
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
                        'Send Donation'
                      )}
                    </Button>

                    {/* <BrandingImage src={MetamaskLogo} alt="Metamask logo" /> */}
                  </Form>
                ) : (
                  <div>
                    <TransactionsHeader>
                      <b>Payment Successful!</b> Please find below your transaction hashes.
                    </TransactionsHeader>

                    {txs.map((tx) => {
                      return <Transaction key={tx.hash}>{tx.hash}</Transaction>
                    })}

                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={styles.closeButton}
                      onClick={() => setOpen(false)}>
                      Close
                    </Button>
                  </div>
                )}
              </>
            )}
          </InnerContainer>
        </ClickAwayListener>
      </MainContainer>
    </Portal>
  )
}

export default DonationPortal
