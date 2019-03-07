import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Lightbox from "./Lightbox";


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

const Gallery = (props) => (
  <StaticQuery
    query={graphql`
			query IndexQuery {
				site {
					siteMetadata {
						title
					}
				}
				allImageSharp {
					edges {
						node {
							sizes(maxHeight: 600) {
								...GatsbyImageSharpSizes
							}
						}
					}
				}
			}
    `}
    render={(data) => (
		typeof window !== 'undefined' &&
			<Lightbox images={data.allImageSharp.edges} folderName={props.folderName} />
		
    )}
  />
)
export default Gallery
