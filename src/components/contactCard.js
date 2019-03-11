import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { 
	Pane, 
	Paragraph, 
	Heading,
	Avatar,
	Text,
} from 'evergreen-ui'

import { 
	FaRegEnvelopeOpen,
	FaMobileAlt,
	FaMapMarker,
	FaTwitterSquare,
	FaFacebookSquare,
	FaInstagram,
	FaGithubSquare,
	FaLinkedin
} from 'react-icons/fa';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const ContactCard = ({theme}) => (
  <StaticQuery
    query={graphql`
    {
			personalDetailsJson {
				id
				name
				email
				about_me
				phone
				what_do_i_do
				website
				designation
				location
				skype
				twitter
				github
				facebook
				instagram
				linkedin
				locationUrl
			}
		}
    `}
    render={data => (
        <div className="container p-4">
            <Heading size={600} marginBottom={20} textAlign="center">
              Contact Me
            </Heading>
						<div className="container-fluid">
              <div className="m-auto">
									<div className="row justify-content-center">
										<div className="card px-4">
										<div className="row">
										<div className="col pt-5 col-lg-4 col-sm-12 text-center">
											<Avatar name={data.personalDetailsJson.name} size={75} marginBottom={10}/>
											<Heading>{data.personalDetailsJson.name}</Heading>
											<Paragraph>{data.personalDetailsJson.designation}</Paragraph>
										</div>
										<div className="col p-4 col-lg-auto col-sm-12 d-flex flex-column">
											<Text marginBottom={5}>
												<a target="_blank" rel="noopener noreferrer" href={`tel:${data.personalDetailsJson.phone}`}>
													<FaMobileAlt color="#34a853" style={{verticalAlign: 'middle', marginRight: 10}} />{data.personalDetailsJson.phone}
												</a>
											</Text>
											<Text marginBottom={5}>
												<a target="_blank" rel="noopener noreferrer" href={`mailto:${data.personalDetailsJson.email}?Subject=Hey%20Vibhor!`}>
													<FaRegEnvelopeOpen style={{verticalAlign: 'middle', marginRight: 10}} />{data.personalDetailsJson.email}
												</a>
											</Text>
											<Text marginBottom={5}>
												<a target="_blank" rel="noopener noreferrer" href={`${data.personalDetailsJson.locationUrl}`}>
													<FaMapMarker color="#ea4335" style={{verticalAlign: 'middle', marginRight: 10}} />{data.personalDetailsJson.location}
												</a>
											</Text>
											<Text marginBottom={5}>
												<a target="_blank" rel="noopener noreferrer" href={`${data.personalDetailsJson.linkedin}`}>
													<FaLinkedin color="#0077B5" style={{verticalAlign: 'middle', marginRight: 10}} />{data.personalDetailsJson.name}
												</a>
											</Text>
											<Text marginBottom={5}>
												<a target="_blank" rel="noopener noreferrer" href={`https://twitter.com/${data.personalDetailsJson.twitter}`}>
													<FaTwitterSquare color="#0084b4" style={{verticalAlign: 'middle', marginRight: 10}} />{data.personalDetailsJson.twitter}
												</a>
											</Text>
											<Text marginBottom={5}>
												<a target="_blank" rel="noopener noreferrer" href={`https://facebook.com/${data.personalDetailsJson.facebook}`}>
													<FaFacebookSquare color="#3b5998" style={{verticalAlign: 'middle', marginRight: 10}} />{data.personalDetailsJson.facebook}
												</a>
											</Text>
											<Text marginBottom={5}>
												<a target="_blank" rel="noopener noreferrer" href={`https://instagram.com/${data.personalDetailsJson.instagram}`}>
													<FaInstagram color="#dd2a7b" style={{verticalAlign: 'middle', marginRight: 10}} />{data.personalDetailsJson.instagram}
												</a>
											</Text>
											<Text marginBottom={5}>
												<a target="_blank" rel="noopener noreferrer" href={`https://github.com/${data.personalDetailsJson.github}`}>
													<FaGithubSquare color="#333333" style={{verticalAlign: 'middle', marginRight: 10}} />{data.personalDetailsJson.github}
												</a>
											</Text>									
										</div>
										</div>
									</div>
								</div>
							</div>
						</div>
          </div>
    )}
  />
)
export default ContactCard
