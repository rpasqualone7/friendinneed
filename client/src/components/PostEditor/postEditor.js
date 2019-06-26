import React, { Component } from 'react';
import { TextInput, Button, Icon } from 'react-materialize';


class PostEditor extends Component {
	// constructor(props) {
		// super(props);

		state = {
			 body: '',
			 date: Date.now,
			 user: '',

		};

	// 	this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);
	// 	this.createPost = this.createPost.bind(this);

	// }

	handlePostEditorInputChange = (ev) => {
		this.setState({
		   body: ev.target.value
		});
	  }

	  createPost = (ev) => {
		  ev.preventDefault();
		  const newEntry = {user: "", body: this.state.body, date: Date.now};
		  this.props.addPost(newEntry);
		  this.setState({
			   body: '',
			   date: '',
			   user: ''
		  })
		  console.log(this.state)
	  }

	render() {
		return (

			<div className='card post-editor'>
				<div className='card-content'>
					<TextInput className="post-editor-input" label="Add something nice!" value={this.state.body} onChange={this.handlePostEditorInputChange} />
					<Button className="post-editor-button" type="submit" waves="light" onClick={this.createPost}>
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