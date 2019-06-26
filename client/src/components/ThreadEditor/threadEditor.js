import React, { Component } from 'react';
import { TextInput, Button, Icon } from 'react-materialize';


	class ThreadEditor extends Component {

		state = {
			
				title: '', 
				body: '',
				date: Date.now
		}
		
	handleTitleInputChange = event => {
		this.setState({
		  title: event.target.value
		});
	  };

	  	
	handleBodyInputChange = event => {
		this.setState({
		  body: event.target.value
		});
	  };

	  createThread = event => {
		event.preventDefault();
		console.log("test");
		const newEntry = {user:"", body: this.state.body, title: this.state.title, date: Date.now};
		this.props.addThread(newEntry);
		this.setState({
			body: '',
			date: '',
			title: ''
		});
		 
		}


		render() {
		return(
			<div>
				<div className='card content'>
					<TextInput className="thread-title-input" label="Thread Title" value={this.state.title} onChange={this.handleTitleInputChange}/>
				</div>

				<div className='card content'>
					<TextInput className="thread-body-input" label="Start the conversatrion!" value={this.state.body} onChange={this.handleBodyInputChange}/>
				</div>
		
					<Button className="thread-editor-button" type="submit" waves="light" onClick={this.createThread}>
						Post
                <Icon right>
							send
                </Icon>
					</Button>
				
				</div>
			
				)
			}
		}
		export default ThreadEditor


		
