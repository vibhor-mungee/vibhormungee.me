// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Pane, Heading } from 'evergreen-ui'

const Header = ({ siteTitle }) => (
  <div className="container-fluid py-2 px-4" style={{background: '#47B881'}}>
    <Pane flex={1} alignItems="center" display="flex">
      <Heading size={600} color="#F9F9FB">{siteTitle}</Heading>
    </Pane>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
