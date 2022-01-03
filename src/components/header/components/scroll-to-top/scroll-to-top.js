import React from "react"
import PropTypes from "prop-types"
import Box from "@mui/material/Box"
import Zoom from "@mui/material/Zoom"

class ScrollToTop extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showButton: false,
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll() {
    const { showButton } = this.state

    if (window.scrollY > 100) {
      if (!showButton) {
        window.removeEventListener("scroll", this.handleScroll)

        this.setState({ showButton: true }, () => {
          window.addEventListener("scroll", this.handleScroll)
        })
      }
    } else {
      if (showButton) {
        window.removeEventListener("scroll", this.handleScroll)

        this.setState({ showButton: false }, () => {
          window.addEventListener("scroll", this.handleScroll)
        })
      }
    }
  }

  handleClick(event) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  render() {
    const { showButton } = this.state
    const { children } = this.props

    if (!showButton) return null

    return (
      <Zoom in={showButton}>
        <Box
          onClick={this.handleClick}
          role="presentation"
          sx={{ position: "fixed", bottom: 16, right: 16 }}>
          {children}
        </Box>
      </Zoom>
    )
  }
}

ScrollToTop.propTypes = {
  children: PropTypes.element.isRequired,
}

export default ScrollToTop
