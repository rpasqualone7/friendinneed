import React, { Component } from 'react';
import ThreadEditor from "../../components/ThreadEditor/threadEditor";
import ThreadTextDisplay from "../../components/threadTextDisplay/threadTextDisplay"
import API from "../../utlis/API";
class ThreadMain extends Component {

	state = {
		threads: [
			{ title: 'Introduction Thread', body: ' First time visiting? Click here!', date: Date.now, user: '' }
		],
	};
	componentDidMount() {
		this.loadThreads();
	}

	loadThreads = () => {
		API.getThreads()
			.then(res =>
				 this.setState({ threads: [res.body] }),
				// console.log("Response.body");
				// console.log(res.body);
				// console.log(res);
				// console.log(this.getThreads);
			)
			.catch(err => console.log(err));
	};


	addThread = (newThread) => {
		let newState = [...this.state.threads, newThread]
		API.saveThreads({
			threads: newState
		})
		this.setState({
			threads: newState
		});
		console.log(newThread)
	}



	render() {
		return (
			<div>
				{this.state.threads.length ? (
					<div>
						{
							this.state.threads.map((threads, index) => (

								<ThreadTextDisplay
									body={threads.body}
									title={threads.title}
									id={threads.id}
									key={index} />


							)
							)
						}
					</div>
				) : (
						<h3>No threads to display</h3>

					)}
				<ThreadEditor addThread={this.addThread} />
			</div>
		)
	}
}

export default ThreadMain;