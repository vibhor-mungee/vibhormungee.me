import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { 
	Pane, 
	Paragraph, 
	Heading,
	Card,
} from 'evergreen-ui'
import { Icon } from "evergreen-ui/commonjs/icon";

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
						id
					 	title
						icon
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
					<Pane
						display="flex"
						flexDirection="row"
						justifyContent="space-between"
						alignItems="center" 
						width="100%"
						height="100%"
						className="row"
					>
					{allResultFocusJson.edges.map(({node}) => (
						<Card 
							key={node.id}
							background={theme.colors.background.tint2} 
							display="flex"
							flexDirection="column"
							flexGrow={1}
							alignItems="center"
							padding={20}
							borderRadius={20}
							hoverElevation={3}
							margin={1}
							height={350}
							className="col-lg-3 col-sm-12"
						>
							<Heading size={500} marginBottom={20}>{node.title}</Heading>
							<Icon icon={node.icon} color="#263238" size={60} />
							<Paragraph textAlign="center" marginTop={20}>
								{node.content}
							</Paragraph>
						</Card>
					))}
					</Pane>
				</Pane>
    )}
  />
)
export default ResultFocus
