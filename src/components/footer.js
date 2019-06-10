// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Pane, Text, Heading } from 'evergreen-ui'

const Footer = ({ siteTitle }) => (
  <div className="container-fluid py-2 px-4" style={{background: '#263238'}}>
    <div className="row">
      <div className="col-lg-6 col-sm-12">
        <Pane flex={1} alignItems="center" display="flex">
          <Heading size={600} color="#F9F9FB">{siteTitle}</Heading>
        </Pane>
      </div>
      <div className="col-lg-6 col-sm-12 text-lg-right">
        <Text color="#F9F9F9">
          © {new Date().getFullYear()}, Developed by: Vibhor Mungee using
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Text>
      </div>
    </div>
  </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
