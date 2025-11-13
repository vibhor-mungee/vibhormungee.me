import React, { Component, Fragment } from 'react'
import { Dialog, Button, TextInput, Textarea } from 'evergreen-ui';
import "./contactForm.css";

class ContactForm extends Component {
  state = {
    isShown: false,
    selectedImage: 0,
  }  

  render() {
    return (
      <Fragment>
				<Dialog
					title="Get in touch"
					isShown={this.state.isShown}
					onCloseComplete={() => this.setState({ isShown: false })}
					hasFooter={false}
				>
					<form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true" netlify>
						<p>
							<TextInput
								name="email"								
								placeholder="Please enter you Email Address..."
							/>
						</p>
						<p>
							<Textarea
								name="message"
								placeholder="Type in your message here..."
							/>
						</p>
						<div data-netlify-recaptcha="true"></div>
						<p>
							<Button type="submit">Send</Button>
						</p>
					</form>
				</Dialog>
				<Button
					onClick={() => this.setState({ isShown: true })} 
					iconBefore="hand"
					className="contact-btn"
				>
					Contact
				</Button>				
      </Fragment>
    )
  }
}

export default ContactForm