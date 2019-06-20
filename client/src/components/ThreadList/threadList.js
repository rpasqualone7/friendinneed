import React from "react";
import { Row, Collection, CollectionItem,} from 'react-materialize';

function threadList(props) {
	return (
		<Row>
			<Col m={6} s={12}>
				<Collection>
					{props.controller.map((threadModel) => (
					<CollectionItem href={threadModel.ObjectId}>
						<Row className="thread-list-header">
							<Col md={8}>
							<h3 className="thread-title">{threadModel.title}</h3>
							<h5 className="thread-author">{threadModel.author}</h5>
							</Col>
						</Row>	
					</CollectionItem>
					))}
				</Collection>
			</Col>
		</Row>
	)
}