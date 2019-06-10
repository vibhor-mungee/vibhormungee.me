// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Heading, Avatar } from 'evergreen-ui'
import ContactForm from "../components/contactForm";

const Header = ({ siteTitle, author }) => (
  <div className="container-fluid py-2 px-4" style={{background: '#263238'}}>
    <div className="row">
      <div className="offset-md-2 col-md-7 d-flex align-items-center pl-4">
        <Avatar isSolid color="blue" name={author} size={40} marginRight={16} />
        <Heading size={600} color="#F9F9FB">{siteTitle}</Heading>
      </div>
      <div className="col">
        <ContactForm />
      </div>
      
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
