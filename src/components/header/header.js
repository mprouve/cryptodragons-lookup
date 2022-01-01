import React from "react"
import ScrollToTop from "./components/scroll-to-top/scroll-to-top.js"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
// import Avatar from "@mui/material/Avatar"
// import Button from "@mui/material/Button"
// import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"
import Fab from "@mui/material/Fab"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"

// const settings = ["Profile", "Account", "Dashboard", "Logout"]

const styles = {
  menuItem: {
    padding: ".5rem 1rem",
    "& .material-icons": {
      marginTop: ".2rem",
      marginRight: "1rem",
      fontSize: "1.3rem",
    },
  },
  typography: {
    lineHeight: "1rem",
    fontSize: "1rem",
  },
}

const Header = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  // const [anchorElUser, setAnchorElUser] = React.useState(null)
  const HeaderTitle = "CryptoDragons Enhanced Lookup"

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget)
  // }

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null)
  // }

  return (
    <AppBar position="fixed" color="default">
      <Container maxWidth={false}>
        <Toolbar disableGutters sx={{ minHeight: "4rem" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              marginBottom: ".2rem",
            }}>
            {HeaderTitle}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{marginLeft: '-.7rem'}}>
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              marginBottom: ".2rem",
            }}>
            {HeaderTitle}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}>
                {page}
              </Button>
            ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ marginLeft: "-.7rem" }}>
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block" },
              }}>
              <MenuItem onClick={handleCloseNavMenu} sx={styles.menuItem}>
                <span className="material-icons">extension</span>
                <a
                  href="https://chrome.google.com/webstore/detail/dragon-stat-calculator/npbbffpmhkbcebmamddilhalnbppecmh?hl=en-US&authuser=1"
                  target="_blank"
                  rel="noreferrer">
                  <Typography textAlign="center" sx={styles.typography}>
                    Chrome Extension
                  </Typography>
                </a>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu} sx={styles.menuItem}>
                <span className="material-icons">article</span>
                <a
                  href="https://docs.google.com/spreadsheets/d/1HYK8dKyQb3e7nsAz88n3_M7LD6vu40lDn5lOm-h6OCE/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer">
                  <Typography textAlign="center" sx={styles.typography}>
                    Breeding Guide
                  </Typography>
                </a>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu} sx={styles.menuItem}>
                <span className="material-icons">contact_support</span>
                <a href="mailto:marcoprouve@gmail.com">
                  <Typography textAlign="center" sx={styles.typography}>
                    Contact Support
                  </Typography>
                </a>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>

      <ScrollToTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon sx={{ color: "#fff" }} />
        </Fab>
      </ScrollToTop>
    </AppBar>
  )
}

export default Header
