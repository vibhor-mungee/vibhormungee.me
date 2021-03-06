import React from "react"
import { 
    Pane, 
    Paragraph, 
    Heading,
  } from 'evergreen-ui'

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

const Section = (props) => (
    <Pane       
        padding={50}
        marginBottom={20}
        marginTop={20}
    >
        <Heading size={600} marginBottom={20} textAlign="center">
            {props.heading}
        </Heading>
        <Paragraph className="text-lg-left text-center">
            {props.paragraph}            
        </Paragraph>
    </Pane>
)
export default Section
