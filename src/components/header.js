// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Pane, Heading } from 'evergreen-ui'

const Header = ({ siteTitle }) => (
  <Pane display="flex" padding={16} background='#47B881' borderRadius={3}>
    <Pane flex={1} alignItems="center" display="flex">
      <Heading marginLeft={245} size={600} color="#F9F9FB">{siteTitle}</Heading>
    </Pane>
  </Pane>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
