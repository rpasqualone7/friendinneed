import React, { Component } from 'react';
import { Row, Col, Collection, CollectionItem } from 'react-materialize';
import { ThreadInput, ThreadPostBtn, ThreadTextDisplay } from "../../components/ThreadEditor/threadEditor";
import API from "../../utlis/API";

class ThreadMain extends Component {

		// this.addThread = this.addThread.bind(this);
		// this.addTitle = this.addTitle.bind(this);

		state = {
			threads: [],
			title: '',
			body: '',
			user:''
		};
	componentDidMount() {
		this.loadThreads();
	}

	loadThreads = () => {
		API.getThreads()
		  .then(res =>
			this.setState({ threads: res.data, title: "", user: "", body: "" })
		  )
		  .catch(err => console.log(err));
	  };
	
	// addThread(newThreadBody) {
	// 	const newState = Object.assign({}, this.state)
	// 	newState.threads.push(newThreadBody);
	// 	this.setState(newState);
	// }
	// addTitle(newThreadTitle) {
	// 	const newState = Object.assign({}, this.state)
	// 	newState.title.push(newThreadTitle);
	// 	this.setState(newState);
	// }
	
	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
		  [name]: value
		});
	  };

	  
  handleFormSubmit = event => {
    event.preventDefault();
 
      API.saveThreads({
        title: this.state.title,
        user: this.state.user,
        body: this.state.body
      })
        .then(res => this.loadThreads())
        .catch(err => console.log(err));
    }
  

	


	render() {
		return (
			<div>


				<Row>
					<Col m={6} s={12}>
						<Collection>
							<CollectionItem href="/thread">
								
							<ThreadTextDisplay
								name="title"
								value={this.state.title}
								onChange={this.handleInputChange}
							/>
							</CollectionItem>
							<CollectionItem href="/thread">
							<ThreadTextDisplay
								name="body"
								value={this.state.body}
								onChange={this.handleInputChange}
							/>
							</CollectionItem>
						</Collection>
					</Col>
				</Row>

				<ThreadInput 
				value={this.state.tilte}
				onChange={this.handleInputChange}
				name="title"
				placeholder="Thread Title"
				/>
				<ThreadInput 
					value={this.state.body}
					onChange={this.handleInputChange}
					name="body"
					placeholder="Start the conversation!"
					/>
				<ThreadPostBtn 
				onClick={this.handleFormSubmit}/>

			</div>
		)
	}
}

export default ThreadMain;