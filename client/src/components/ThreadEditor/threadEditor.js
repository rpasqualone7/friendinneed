import React, { Component } from 'react';
import { TextInput, Button, Icon } from 'react-materialize';

class ThreadEditor extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newThreadBody: '',
			newThreadTitle: '',
		};

		this.handleThreadEditorInputChange = this.handleThreadEditorInputChange.bind(this);
		this.createThread = this.createThread.bind(this);

	}

	handleThreadEditorInputChange(ev) {
		this.setState({
		  newThreadBody: ev.target.value
		});
	  }

	  createThread() {
		  this.props.addThread(this.state.newThreadBody);
		  this.setState({
			  newThreadBody: '',
			  newThreadTitle: '',
		  });
	  }

	render() {
		return (

			<div className='card thread-editor'>
				<div className='card-content'>
					<TextInput className="thread-title-input" label="Thread Title" value={this.state.newThreadTitle} />
					<TextInput className="thread-editor-input" label="Start the conversation!" value={this.state.newThreadBody} onChange={this.handleThreadEditorInputChange} />
					<Button className="thread-editor-button" type="submit" waves="light" onClick={e=> this.props.addThread(this.state.newThreadBody)}>
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
export default ThreadEditor; 