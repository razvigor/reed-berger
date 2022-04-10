import React from 'react';
import Container from './Container';
import Header from './Header';
import Login from './Login';
import './PostList.scss';

const PostList = () => {
	const [user, setUser] = React.useState('');
	function handleClick() {
		setUser('');
	}
	if (!user) {
		return <Login setUser={setUser} />;
	}
	return (
		<Container>
			<div className='content'>
				<Header user={user} onclick={handleClick} />
			</div>
		</Container>
	);
};

export default PostList;
