import React, { Component } from 'react';
import Post from "../../components/Post/post";
import PostEditor from "../../components/PostEditor/postEditor";
import API from "../../utlis/API";
class ThreadDisplay extends Component {

	
		state = {
			posts: [
				{user: "", body:"Welcome to the forum!", date: Date.now}
			],
		};
		componentDidMount() {
			API.getThread(this.props.match.params.id)
			  .then(res => this.setState({ posts: [res.data] }))
			  .catch(err => console.log(err));
		  }
		
		
	
		loadPosts = () => {
			API.getPosts()
			  .then(res =>
				this.setState({ posts: [res.data]}),
				console.log(this.setState)
			  )
			  .catch(err => console.log(err));
		  };
		

	addPost = (newPostBody) => {
		let newState = [...this.state.posts, newPostBody]
		API.savePosts({
			posts: newState
		})
		// .then(res => this.loadPosts())
		// .catch(err => console.log(err));
		this.setState({
			posts: newState
		});
		console.log(newPostBody)
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