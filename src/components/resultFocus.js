import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { 
	Pane, 
	Paragraph, 
	Heading,
	Card,
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

const ResultFocus = ({theme}) => (
  <StaticQuery
    query={graphql`
    {
			allResultFocusJson{
			 	edges{
				 	node{
					 	title
					 	content
				 	}
			 	}
		 	}
	 	}
    `}
    render={({allResultFocusJson}) => (
        <Pane
					padding={20}
					marginBottom={20}
					marginTop={20}
					display="flex"
					alignItems="center"
					justifyContent="center"
					flexDirection="column"
				>
					<Heading size={600} marginBottom={20}>
							How I focus on results?
					</Heading>
					{allResultFocusJson.edges.map(({node}) => (
						<Card 
							width="90%"
							background={theme.colors.background.tint2} 
							display="flex"
							flexDirection="column"
							alignItems="center"
							justifyContent="center"
							padding={20}
							paddingLeft={50}
							paddingRight={50}
							borderRadius={20}
							hoverElevation={3}
							margin={10}
						>
							<Heading size={500} marginBottom={20}>{node.title}</Heading>
							<Paragraph>
								{node.content}
							</Paragraph>
						</Card>
					))}
				</Pane>
    )}
  />
)
export default ResultFocus
