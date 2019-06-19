import React from 'react';

const Post = (props) => (
	<div className='card post post-body'>
          <div className='card-content'>
            {props.postBody}
          </div>
        </div>
);
export default Post;