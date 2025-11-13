import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { 
	Pane,
	Text,
	Tooltip,
	Heading,
	Badge,
	Icon
} from 'evergreen-ui'
import Component from "@reactions/component"

const renderTechBadges = (stack, id) => {
	if (!stack) return null;
	return stack.split(',').map((raw, idx) => {
		const item = raw.trim();
		return (
			<Badge key={`${id}-tech-${idx}`} marginRight={8} marginBottom={8} color="blue">
				{item}
			</Badge>
		)
	});
};

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

const Projects = ({theme}) => (
  <StaticQuery
    query={graphql`
    {
			allProjectsJson{
				edges{
					node{
						id
						name
						description
						techStack
					}
				}
			}
		}
    `}
    render={({allProjectsJson}) => {
			return (
			<Component initialState={{ selectedId: null }}>
				{({ state, setState }) => (
				<Pane
						marginBottom={50}
						marginTop={50}
						paddingTop={50}
						paddingBottom={50}
						clearfix
					>
						{/* <Dialog
							isShown={state.isShown}
							title={state.projectTitle}
							onCloseComplete={() => setState({ isShown: false })}
							hasFooter={false}
						>
							{state.projectContent}
							<Pane margin={20}>
								<Gallery folderName={state.imageFolder} />
							</Pane>
						</Dialog> */}
						<Heading size={600} marginBottom={20} textAlign="center">
              My Work
            </Heading>
						<div className="table-responsive">
							<table className="table table-hover table-sm">
								<thead>
									<tr className="d-flex">
										<th className="col-2" scope="col"><Heading size={300}>Project</Heading></th>
										<th className="col-6" scope="col"><Heading size={300}>Tech Stack</Heading></th>
										<th className="col-4" scope="col"><Heading size={300}>Description</Heading></th>
									</tr>
								</thead>
								<tbody>
									{allProjectsJson.edges.map(({node}) => (
										<tr 
											key={node.id} 
											className="d-flex"
											style={{cursor: "pointer"}}
											onClick={() => setState({ selectedId: state.selectedId === node.id ? null : node.id })}
											aria-expanded={state.selectedId === node.id}
										>
											<th className="col-2" scope="row">
												<Pane display="flex" alignItems="center">
													<Icon 
														icon={state.selectedId === node.id ? 'chevron-down' : 'chevron-right'} 
														color="#263238" 
														marginRight={8} 
														aria-hidden
													/>
													{node.name.trim().length < 11 ? 
														<Text>{node.name}</Text> : 
														<Tooltip content={node.name}>
															<Text>{node.name}</Text>
														</Tooltip>
													}
												</Pane>
											</th>
											<td className="col-6">
												{renderTechBadges(node.techStack, node.id)}
											</td>
											<td className="col-4">
												{state.selectedId === node.id ? (
													<Text>{node.description}</Text>
												) : (
													node.description.length < 60 ? 
														<Text>{node.description}</Text> : 
														<Tooltip content={node.description}>
															<Text>{node.description.substring(0,90)}…</Text>
														</Tooltip>
												)}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
            {/* <Heading size={600} marginBottom={20} textAlign="center">
              My Work
            </Heading>
            <Table>
							<Table.Head>
								<Table.TextHeaderCell flexBasis={30}>
									Project
								</Table.TextHeaderCell>
								<Table.TextHeaderCell flexBasis={20}>
									Type
								</Table.TextHeaderCell>
								<Table.TextHeaderCell flexBasis={40}>
									Tech Stack
								</Table.TextHeaderCell>
						
							</Table.Head>
							<Table.VirtualBody height={430} estimatedItemSize={100}>
								{allProjectsJson.edges.map(({node}) => (
									<Table.Row key={node.id}  isSelectable onSelect={() => setState({ 
										isShown: true,
										projectTitle: node.name,
										projectContent: node.description,
										imageFolder: node.imageFolder
									})}>
										<Table.TextCell flexBasis={30}>											
											{node.name.trim().length < 11 ? 
												<Text>{node.name}</Text> : 
												<Tooltip content={node.name}>
													<Text>{node.name}</Text>
												</Tooltip>
											}
										</Table.TextCell>
										<Table.TextCell flexBasis={20}>{node.type.map(type => 
												<Tooltip content={type.name}>
													<Icon icon={type.icon} color="success" marginRight={16} />
												</Tooltip>
										)}</Table.TextCell>
										<Table.TextCell flexBasis={70}>
											{node.techStack && node.techStack.trim().length < 30 ? 
												<Text>{node.techStack}</Text> : 
												<Tooltip content={node.techStack}>
													<Text>{node.techStack}</Text>
												</Tooltip>
											}
										</Table.TextCell>
									</Table.Row>
								))}
							</Table.VirtualBody>
						</Table> */}
          </Pane>
					)}
				</Component>
		)}}
	/>)
		
export default Projects
