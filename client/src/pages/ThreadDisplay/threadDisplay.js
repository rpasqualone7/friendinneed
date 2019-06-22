import React, { Component } from 'react';
import Post from "../../components/Post/post";
import PostEditor from "../../components/PostEditor/postEditor";

class ThreadDisplay extends Component {

	
		state = {
			posts: [],
		};
	

	addPost(newPostBody) {
		const newState = Object.assign({}, this.state)
		newState.posts.push(newPostBody);
		this.setState(newState);
	}


	render() {
		return (
			<div>

				
				{



					this.state.posts.map((postBody, idx) => {
						return (
							<Post key={idx} postBody={postBody} />
						)

					})
				}
				<PostEditor addPost={this.addPost} />
			</div>
		)
	}
}

export default ThreadDisplay;