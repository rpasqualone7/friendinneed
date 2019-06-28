import React from 'react';
import { Row, Col, Collection, CollectionItem, Icon } from 'react-materialize';


const ThreadTextDisplay = (props) => (
		<Row>
			<Col m={6} s={12}>
				<Collection header={props.title}>
					<CollectionItem>
						<div className="text-display" key={props.id} id={props.id}>
							{props.body}
						</div>
						<a href={"/thread/" + props.id} className="secondary-content">
							<Icon>
								send
							</Icon>
						</a>
					</CollectionItem>
				</Collection>
			</Col>
		</Row>

);

export default ThreadTextDisplay;
