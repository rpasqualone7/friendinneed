import React from 'react';
import { TextInput, Button, Icon } from 'react-materialize';


	export function ThreadInput(props){
		return(
				<div className='card content'>
					<TextInput className="thread-editor-input"{...props} />
				</div>
		);
	}

	export function ThreadTextDisplay(props) {
		return(
				
			<div className="text-display">
				<ul className="text-display">{props.value}</ul>
		</div>
	
		);
	}

	
	export function ThreadPostBtn(props){
		return(
	
					<Button className="thread-editor-button" type="submit" waves="light" {...props}>
						Post
                <Icon right>
							send
                </Icon>
					</Button>
				
			
			
				);
			}
		


		
