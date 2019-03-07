import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { 
	Pane, 
	Paragraph, 
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
          >
            <Heading size={600} marginBottom={20} textAlign="center">
              My Expertise
            </Heading>
            {data.allExpertiseJson.edges.map(({node}) => (
              <Pane                
                key={node.title}   
                background={theme.colors.background.tint2}  
                float="left"
                width={240}
                height={400}
                margin={24}
                padding={24}
                display="flex"
                flexDirection="column"
                alignItems="center"
                elevation={1}
                hoverElevation={4}
              >
                <Heading marginBottom={20}>{node.title}</Heading>
                <Paragraph>{node.subtitle}</Paragraph>
                <UnorderedList
                  icon="tick-circle"
                  iconColor="#47B881"
                >
                  {node.pointers.map(pointer => (
                    <ListItem key={pointer.title}>{pointer.title}</ListItem>
                  ))}
                </UnorderedList>
              </Pane>          
            ))}
          </Pane>
    )}
  />
)
export default Experise
