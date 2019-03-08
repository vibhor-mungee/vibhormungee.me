import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { 
	Pane, 	
	Dialog,
	Text,
	Tooltip,
	Icon,
	Heading
} from 'evergreen-ui'
import Component from "@reactions/component"
import Gallery from "./gallery";

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
						imageFolder
						type {
							name
							icon
						}
						mobileFrontend
						mobileBackend
						websiteFrontend
						websiteBackend
						database
						infra
					}
				}
			}
		}
    `}
    render={({allProjectsJson}) => (
			<Component initialState={{ isShown: false, projectTitle: '', projectContent: '', imageFolder: '' }}>
  			{({ state, setState }) => (
        <Pane
            marginBottom={50}
						marginTop={50}
						paddingTop={50}										
						paddingBottom={50}										
            clearfix
          >
						<Dialog
							isShown={state.isShown}
							title={state.projectTitle}
							onCloseComplete={() => setState({ isShown: false })}
							hasFooter={false}
						>
							{state.projectContent}
							<Pane margin={20}>
								<Gallery folderName={state.imageFolder} />
							</Pane>
						</Dialog>
						<Heading size={600} marginBottom={20} textAlign="center">
              My Work
            </Heading>
						<div class="table-responsive">
							<table class="table table-hover table-sm">
								<thead>
									<tr className="d-flex">
										<th class="col-2" scope="col"><Heading size={300}>Project</Heading></th>
										<th class="col-2" scope="col"><Heading size={300}>Type</Heading></th>
										<th class="col-2" scope="col"><Heading size={300}>Mobile Frontend</Heading></th>
										<th class="col-2" scope="col"><Heading size={300}>Mobile Backend</Heading></th>
										<th class="col-2" scope="col"><Heading size={300}>Web Frontend</Heading></th>
										<th class="col-2" scope="col"><Heading size={300}>Web Backend</Heading></th>
										<th class="col-3" scope="col"><Heading size={300}>Database</Heading></th>
										<th class="col-3" scope="col"><Heading size={300}>Infra Stack</Heading></th>
									</tr>
								</thead>
								<tbody>
									{allProjectsJson.edges.map(({node}) => (
										<tr 
											key={node.id} 
											className="d-flex"
											onClick={() => setState({ 
												isShown: true,
												projectTitle: node.name,
												projectContent: node.description,
												imageFolder: node.imageFolder
											})}
										>
											<th class="col-2"  scope="row">
												{node.name.trim().length < 11 ? 
													<Text>{node.name}</Text> : 
													<Tooltip content={node.name}>
														<Text>{node.name}</Text>
													</Tooltip>
												}
											</th>
											<td class="col-2" >
												{node.type.map(type => 
														<Tooltip content={type.name}>
															<Icon icon={type.icon} color="success" marginRight={16} />
														</Tooltip>
												)}
											</td>
											<td class="col-2" >
												{node.mobileFrontend.trim().length < 11 ? 
													<Text>{node.mobileFrontend}</Text> : 
													<Tooltip content={node.mobileFrontend}>
														<Text>{node.mobileFrontend}</Text>
													</Tooltip>
												}
											</td>
											<td class="col-2" >
												{node.mobileBackend.trim().length < 11 ? 
													<Text>{node.mobileBackend}</Text> : 
													<Tooltip content={node.mobileBackend}>
														<Text>{node.mobileBackend}</Text>
													</Tooltip>
												}
											</td>
											<td class="col-2" >
												{node.websiteFrontend.trim().length < 11 ? 
													<Text>{node.websiteFrontend}</Text> : 
													<Tooltip content={node.websiteFrontend}>
														<Text>{node.websiteFrontend}</Text>
													</Tooltip>
												}
											</td>
											<td class="col-2" >
												{node.websiteBackend.trim().length < 11 ? 
													<Text>{node.websiteBackend}</Text> : 
													<Tooltip content={node.websiteBackend}>
														<Text>{node.websiteBackend}</Text>
													</Tooltip>
												}
											</td>
											<td class="col-3" >
												{node.database.trim().length < 11 ? 
													<Text>{node.database}</Text> : 
													<Tooltip content={node.database}>
														<Text>{node.database}</Text>
													</Tooltip>
												}	
											</td>
											<td class="col-3" >
												{node.infra.trim().length < 11 ? 
													<Text>{node.infra}</Text> : 
													<Tooltip content={node.infra}>
														<Text>{node.infra}</Text>
													</Tooltip>
												}
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
									Mobile Frontend
								</Table.TextHeaderCell>
								<Table.TextHeaderCell flexBasis={40}>
									Mobile Backend
								</Table.TextHeaderCell>
								<Table.TextHeaderCell flexBasis={30}>
									Web Frontend
								</Table.TextHeaderCell>
								<Table.TextHeaderCell flexBasis={30}>
									Web Backend
								</Table.TextHeaderCell>
								<Table.TextHeaderCell flexBasis={30}>
									Database
								</Table.TextHeaderCell>
								<Table.TextHeaderCell flexBasis={30}>
									Infra Stack
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
										<Table.TextCell flexBasis={40}>
											{node.mobileFrontend.trim().length < 11 ? 
												<Text>{node.mobileFrontend}</Text> : 
												<Tooltip content={node.mobileFrontend}>
													<Text>{node.mobileFrontend}</Text>
												</Tooltip>
											}											
										</Table.TextCell>
										<Table.TextCell flexBasis={40}>
											{node.mobileBackend.trim().length < 11 ? 
												<Text>{node.mobileBackend}</Text> : 
												<Tooltip content={node.mobileBackend}>
													<Text>{node.mobileBackend}</Text>
												</Tooltip>
											}
										</Table.TextCell>
										<Table.TextCell flexBasis={30}>
											{node.websiteFrontend.trim().length < 11 ? 
												<Text>{node.websiteFrontend}</Text> : 
												<Tooltip content={node.websiteFrontend}>
													<Text>{node.websiteFrontend}</Text>
												</Tooltip>
											}
										</Table.TextCell>
										<Table.TextCell flexBasis={30}>
											{node.websiteBackend.trim().length < 11 ? 
												<Text>{node.websiteBackend}</Text> : 
												<Tooltip content={node.websiteBackend}>
													<Text>{node.websiteBackend}</Text>
												</Tooltip>
											}
										</Table.TextCell>
										<Table.TextCell flexBasis={30}>
											{node.database.trim().length < 11 ? 
												<Text>{node.database}</Text> : 
												<Tooltip content={node.database}>
													<Text>{node.database}</Text>
												</Tooltip>
											}											
										</Table.TextCell>
										<Table.TextCell flexBasis={30}>
											{node.infra.trim().length < 11 ? 
												<Text>{node.infra}</Text> : 
												<Tooltip content={node.infra}>
													<Text>{node.infra}</Text>
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
    )}
  />
)
export default Projects
