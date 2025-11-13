import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { 
	Pane,
	Heading,
	UnorderedList,
	ListItem
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

const Experise = ({theme}) => (
  <StaticQuery
    query={graphql`
    {
			allExpertiseJson{
				edges{
					node{
            id
						title
						subtitle
						pointers{
							title
							star_rating
						}
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
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Heading size={600} marginBottom={20}>
              My Expertise
            </Heading>
            <div className="row justify-content-center">
              {data.allExpertiseJson.edges.map(({node}) => (
                <div className="col-lg-3 m-2 my-4" key={node.id}>
                  <div className="card shadow h-100 p-3" style={{backgroundColor: "#F7F9FD"}}>
                    <Heading marginBottom={20} alignSelf="center">{node.title}</Heading>
                    {/* <Paragraph marginBottom={10}>{node.subtitle}</Paragraph> */}
                    <UnorderedList
                      icon="tick-circle"
                      iconColor="#263238"
                    >
                      {node.pointers.map(pointer => (
                        <ListItem key={pointer.title}>{pointer.title}</ListItem>
                      ))}
                    </UnorderedList>
                  </div>
                </div>
              ))}
            </div>
          </Pane>
    )}
  />
)
export default Experise
