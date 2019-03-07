import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { 
	IconButton, 
	Pane,
	Pill,
	Tooltip,
	Position
} from 'evergreen-ui'
import axios from 'axios';
if (typeof window !== 'undefined') {
	const { Widget, addResponseMessage, toggleWidget } = require('react-chat-widget');
}
import 'react-chat-widget/lib/styles.css';
import "./contact.css"
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

class Contact extends React.PureComponent {
	constructor(props){
		super(props);
		this.state = {
			showPill: false,
			pillCount: 2,
			showTooltip: true,
		}
	}
	componentDidMount(){
		setTimeout(function(){this.setState({showPill:true},()=>{
			addResponseMessage("Hi There!");
			addResponseMessage("How can I help you?");
		})}.bind(this), 2000);
		setTimeout(function(){
			this.setState({
				showTooltip: ''
			})
		}.bind(this), 10000);
	}

	handleNewUserMessage = (newMessage) => {
		console.log(`New message incoming! ${newMessage}`);
		axios({
			method: 'post',
			headers: {'Content-type': 'application/x-www-form-urlencoded'},
			url: 'https://hooks.slack.com/services/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',
			data: {"text":newMessage}
		});
		setTimeout(function(){
			addResponseMessage("Hello! Thank you for reaching out!");
			setTimeout(function(){
				addResponseMessage("Please drop in your email address or mobile number");
				setTimeout(function(){
					addResponseMessage("I will get back to you as soon as possible");
				}, 1000);
			}, 1000);
		}, 1000);
  }
	render() {
		return (
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
						}
					}
				`}
				render={data => (					
					<Widget
						title={data.personalDetailsJson.name}
						subtitle=""						
						fullScreenMode={false}
						launcher={handleToggle => (
							<Pane
								id="button-pane"
								background="tint2"
								border="muted"
								padding={30}
								elevation={1}
								borderRadius={100}
							>
								{ this.state.showPill &&
									<Tooltip content={`You've a message from ${data.personalDetailsJson.name.split(' ')[0]}`} position={Position.TOP} isShown={this.state.showTooltip}>
										<Pill display="inline-flex" className="notification-pill" color="red" isSolid>{this.state.pillCount}</Pill>
									</Tooltip>
								}
								<IconButton 
									icon="chat"
									appearance="minimal"
									iconSize={32}
									onClick={()=> {
										this.setState({showPill: false});
										toggleWidget();
									}} />
							</Pane>
						)}
						handleNewUserMessage={this.handleNewUserMessage}
					/>
				)}
			/>
		)
	}
}

export default Contact
