import React, { Component } from 'react';
import { TextInput, Button, Icon } from 'react-materialize';

class PostEditor extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newPostBody: '',
		};

		this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);
		this.createPost = this.createPost.bind(this);

	}

	handlePostEditorInputChange(ev) {
		this.setState({
		  newPostBody: ev.target.value
		});
	  }

	  createPost() {
		  this.props.addPost(this.state.newPostBody);
		  this.setState({
			  newPostBody: '',
		  });
	  }

	render() {
		return (

			<div className='card post-editor'>
				<div className='card-content'>
					<TextInput className="post-editor-input" label="Start the conversation!" value={this.state.newPostBody} onChange={this.handlePostEditorInputChange} />
					<Button className="post-editor-button" type="submit" waves="light" onClick={e=> this.props.addPost(this.state.newPostBody)}>
						Post
                <Icon right>
							send
                </Icon>
					</Button>
				</div>
			</div>


		)
	}


}
export default PostEditor; 