import React, { Component } from 'react';
import Post from "../../components/Post/post";
import PostEditor from "../../components/PostEditor/postEditor";
import API from "../../utlis/API";
class ThreadDisplay extends Component {

	
		state = {
			posts: [
				{user: "", id:1, body:"Welcome to the forum!", date: Date.now}
			],
		};
	
		loadPosts = () => {
			API.getPosts()
			  .then(res =>
				this.setState({ threads: res.data, title: "", user: "", body: "" })
			  )
			  .catch(err => console.log(err));
		  };
		

	addPost = (newPostBody) => {
		let newState = [...this.state.posts, newPostBody]
		API.savePosts({
			posts: newState
		})
		.then(res => this.loadPosts())
		.catch(err => console.log(err));
		this.setState({
			posts: newState,
			// posts: id = Math.random()
		});
	}


	render() {
		return (
			<div>
				{this.state.posts.map((post, index) => (
					<Post 
					post={post.body} 
					key={index}/>
				)
					
					)}
				{/* <Post posts={this.state.posts} /> */}
				<PostEditor addPost={this.addPost} />
			</div>
		)
	}
}

export default ThreadDisplay;