import React from 'react';
import { Row, Col, Collection, CollectionItem } from 'react-materialize';


const ThreadTextDisplay = (props) => {
	return(
		<Row>
		<Col m={6} s={12}>
		<Collection>
			<CollectionItem href="/thread">

			<div className="text-display"key={props.key}>
			{props.threads}
			</div>
			
				
			</CollectionItem>
			</Collection>
			</Col>
			</Row>
	
			

	);
}

export default ThreadTextDisplay
