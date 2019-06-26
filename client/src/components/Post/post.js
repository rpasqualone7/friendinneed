import React from 'react';

const Post = (props) => (
	<div className='card post post-body'>
          <div className='card-content' key={props.key}>
            {props.post}
          </div>
        </div>
);
export default Post; 