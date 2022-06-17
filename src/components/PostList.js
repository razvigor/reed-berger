import React from 'react';
import { UserContext, PostContext } from '../App';
import Container from './Container';
import Header from './Header';
import Post from './Post';
import Login from './Login';
import './PostList.scss';

const PostList = () => {
	const [user, setUser] = React.useContext(UserContext);
	const [state, dispatch] = React.useContext(PostContext);
	const content = React.useMemo(() => {
		return state;
	}, [state]);
	console.log(content.posts);
	function handleClick() {
		setUser('');
	}
	if (!user) {
		return <Login />;
	}
	return (
		<Container>
			<div className='content'>
				<Header user={user} onclick={handleClick} />
			</div>
			<div className='posts'>
				{content.posts.length > 0
					? content.posts.map((post) => {
							console.log(post.image, post.content, post.id, post.user);
							return (
								<Post
									image={URL.cretaeObjectUrl(post.image)}
									content={post.content}
									user={post.user}
									key={post.id}
								/>
							);
					  })
					: null}
			</div>
		</Container>
	);
};

export default PostList;
