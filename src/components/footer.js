// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Pane, Text, Heading } from 'evergreen-ui'

const Footer = ({ siteTitle }) => (
  <Pane display="flex" padding={16} background='#47B881' borderRadius={3}>
    <Pane flex={1} alignItems="center" display="flex">
      <Heading marginLeft={245} size={600} color="#F9F9FB">{siteTitle}</Heading>
    </Pane>
    <Text color="#F9F9F9" marginRight={245}>
      © {new Date().getFullYear()}, Developed by: Vibhor Mungee using
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Text>
  </Pane>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
