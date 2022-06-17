import React from 'react';

const Post = ({ image, content, user }) => {
	return (
		<div className='post'>
			<img src={image} alt='Post' />
			<p>{content}</p>
			<p>{user}</p>
		</div>
	);
};

export default Post;
