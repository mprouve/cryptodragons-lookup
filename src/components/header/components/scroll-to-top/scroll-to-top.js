import React from "react"
import PropTypes from "prop-types"
import Box from "@mui/material/Box"
import Zoom from "@mui/material/Zoom"

class ScrollToTop extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showScrollToTopButton: false,
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
    const { showScrollToTopButton } = this.state

    if (window.scrollY > 100) {
      if (!showScrollToTopButton) {
        window.removeEventListener("scroll", this.handleScroll)

        this.setState({ showScrollToTopButton: true }, () => {
          window.addEventListener("scroll", this.handleScroll)
        })
      }
    } else {
      if (showScrollToTopButton) {
        window.removeEventListener("scroll", this.handleScroll)

        this.setState({ showScrollToTopButton: false }, () => {
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
    const { showScrollToTopButton } = this.state
    const { children } = this.props

    if (!showScrollToTopButton) return null

    return (
      <Zoom in={showScrollToTopButton}>
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
