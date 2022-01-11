import React from 'react'
import ScrollToTop from './components/scroll-to-top/scroll-to-top.js'
import DonationPortal from '../partials/donation-portal/donation-portal.js'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const styles = {
  headerButton: {
    '&:hover': {
      backgroundColor: '#eee'
    }
  },
  donateMenuButton: {
    display: { xs: 'inline-flex', md: 'none' },
    minHeight: '2.3rem',
    height: '2.3rem'
  },
  menuItem: {
    padding: '.5rem 1rem',
    '& .material-icons': {
      marginTop: '.2rem',
      marginRight: '1rem',
      fontSize: '1.3rem'
    }
  },
  typography: {
    lineHeight: '1rem',
    fontSize: '1rem'
  },
  divider: {
    display: { xs: 'flex', md: 'none' },
    margin: '.4rem 0'
  }
}

const Header = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [donationOpen, setDonationOpen] = React.useState(false)
  // const [anchorElUser, setAnchorElUser] = React.useState(null)
  const HeaderTitle = 'CryptoDragons Lookup'

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleDonate = () => {
    console.log('Donating')

    setDonationOpen(true)
  }

  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget)
  // }

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null)
  // }

  return (
    <AppBar position="fixed" color="default">
      {donationOpen && <DonationPortal setOpen={setDonationOpen} />}

      <Container maxWidth={false}>
        <Toolbar disableGutters sx={{ minHeight: '4rem' }}>
          <a href="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                marginBottom: '.2rem',
                cursor: 'pointer'
              }}>
              {HeaderTitle}
            </Typography>
          </a>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              marginBottom: '.2rem'
            }}>
            {HeaderTitle}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              color="primary"
              variant="contained"
              sx={{
                ...styles.donateButton,
                display: { xs: 'none', md: 'inline-flex' },
                marginRight: '1rem'
              }}
              onClick={handleDonate}>
              Donate
            </Button>

            <a href="/arena-simulator">
              <Button
                sx={{
                  ...styles.headerButton,
                  display: { xs: 'none', md: 'inline-flex' },
                  marginRight: '1rem'
                }}>
                Arena Simulator
              </Button>
            </a>

            <a
              href="https://chrome.google.com/webstore/detail/dragon-stat-calculator/npbbffpmhkbcebmamddilhalnbppecmh?hl=en-US&authuser=1"
              target="_blank"
              rel="noreferrer">
              <Button
                sx={{
                  ...styles.headerButton,
                  display: { xs: 'none', md: 'inline-flex' },
                  marginRight: '1.7rem'
                }}>
                Chrome Extension
              </Button>
            </a>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ marginLeft: '-.7rem' }}>
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}>
              <div style={{ margin: '0 .5rem' }}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleDonate}
                  sx={styles.donateMenuButton}>
                  Donate
                </Button>
              </div>

              <Divider sx={styles.divider} light />

              <a href="/">
                <MenuItem onClick={handleCloseNavMenu} sx={styles.menuItem}>
                  <span className="material-icons">home</span>
                  <Typography textAlign="center" sx={styles.typography}>
                    Home
                  </Typography>
                </MenuItem>
              </a>

              <a href="/arena-simulator">
                <MenuItem
                  onClick={handleCloseNavMenu}
                  sx={{ ...styles.menuItem, display: { md: 'none' } }}>
                  <span className="material-icons">stadium</span>
                  <Typography textAlign="center" sx={styles.typography}>
                    Arena Simulator
                  </Typography>
                </MenuItem>
              </a>

              <a
                href="https://chrome.google.com/webstore/detail/dragon-stat-calculator/npbbffpmhkbcebmamddilhalnbppecmh?hl=en-US&authuser=1"
                target="_blank"
                rel="noreferrer">
                <MenuItem
                  onClick={handleCloseNavMenu}
                  sx={{ ...styles.menuItem, display: { md: 'none' } }}>
                  <span className="material-icons">extension</span>
                  <Typography textAlign="center" sx={styles.typography}>
                    Chrome Extension
                  </Typography>
                </MenuItem>
              </a>

              <a
                href="https://docs.google.com/spreadsheets/d/1HYK8dKyQb3e7nsAz88n3_M7LD6vu40lDn5lOm-h6OCE/edit?usp=sharing"
                target="_blank"
                rel="noreferrer">
                <MenuItem onClick={handleCloseNavMenu} sx={styles.menuItem}>
                  <span className="material-icons">article</span>
                  <Typography textAlign="center" sx={styles.typography}>
                    Breeding Guide
                  </Typography>
                </MenuItem>
              </a>

              <a href="mailto:marcoprouve@gmail.com">
                <MenuItem onClick={handleCloseNavMenu} sx={styles.menuItem}>
                  <span className="material-icons">contact_support</span>
                  <Typography textAlign="center" sx={styles.typography}>
                    Contact Support
                  </Typography>
                </MenuItem>
              </a>
            </Menu>
          </Box>
        </Toolbar>
      </Container>

      <ScrollToTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon sx={{ color: '#fff' }} />
        </Fab>
      </ScrollToTop>
    </AppBar>
  )
}

export default Header
