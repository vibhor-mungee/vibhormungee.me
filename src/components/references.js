import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { 
	Pane, 
	Paragraph, 
	Heading,
	Avatar,
	Text
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

const References = ({theme}) => (
  <StaticQuery
    query={graphql`
    	{
        allReferencesJson{
          edges{
            node{
							id
              name
              designation
              comment
            }
          }
        }
      }
    `}
    render={data => (
        <Pane
            marginBottom={50}
						marginTop={50}
						paddingTop={50}										
						paddingBottom={50}										
            clearfix
          >
            <Heading size={600} marginBottom={20} textAlign="center">
              What others have to say about me?
            </Heading>
            <div className="row justify-content-center">
              {data.allReferencesJson.edges.map(({node}) => (
                <div className="col-lg-3 m-2" key={node.id}>
                  <div className="card shadow h-100 p-3 align-items-center" style={{backgroundColor: "#F7F9FD"}}>
                    <Avatar name={node.name} size={160} marginBottom={20} />
                    <Heading marginBottom={5}>{node.name}</Heading>
                    <Text size={300} marginBottom={20}>({node.designation})</Text>
                    <Paragraph>{node.comment}</Paragraph>
                  </div>
                </div>          
              ))}
            </div>
          </Pane>
    )}
  />
)
export default References
