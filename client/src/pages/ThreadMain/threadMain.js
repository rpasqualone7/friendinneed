import React, { Component } from 'react';
import ThreadEditor from "../../components/ThreadEditor/threadEditor";
import ThreadTextDisplay from "../../components/threadTextDisplay/threadTextDisplay"
import API from "../../utlis/API";
class ThreadMain extends Component {

	// this.addThread = this.addThread.bind(this);
	// this.addTitle = this.addTitle.bind(this);

	state = {
		threads: [
			{ title: 'First Post', body: ' Welcome to the forum!', user: '', date: Date.now }
		],
	};
	// componentDidMount() {
	// 	this.loadThreads();
	// }

	loadThreads = () => {
		API.getThreads()
			.then(res =>
				this.setState({ threads: this.props.newState })
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

	addThread = (newThread) => {
		let newState = [...this.state.threads, newThread]
		API.saveThreads({
			threads: newState
		})
			.then(res => this.loadThreads())
			.catch(err => console.log(err));
		this.setState({
			threads: newState,
			// posts: id = Math.random()
		});
	}



	render() {
		return (
			<div>
				{this.state.threads.map((threads, index) => (

					<ThreadTextDisplay
						threads={threads.title}
						key={index}
					/>

				)
				)}
				{this.state.threads.map((threads, index) => (

					<ThreadTextDisplay
						threads={threads.body}
						key={index} />
				)
				)}

				<ThreadEditor addThread={this.addThread} />
			</div>
		)
	}
}

export default ThreadMain;