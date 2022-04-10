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
			<Header user={user} onclick={handleClick} />
		</Container>
	);
};

export default PostList;
