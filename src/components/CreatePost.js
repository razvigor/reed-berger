import React from 'react';
import Container from './Container';
import { PostContext, UserContext } from '../App';
import './CreatePost.scss';
import Login from './Login';

const CreatePost = () => {
	const [user] = React.useContext(UserContext);
	const [state, dispatch] = React.useContext(PostContext);
	const [image, setImage] = React.useState(null);
	const [content, setContent] = React.useState('');

	const imageInputRef = React.useRef();
	function handleSubmit(ev) {
		ev.preventDefault();
		const post = { content, image, user, id: Date.now() };
		dispatch({ type: 'ADD_POST', payload: { post } });
		setContent('');
		imageInputRef.current.value = '';
	}
	if (!user) {
		return <Login />;
	}
	return (
		<Container>
			<div className='content'>
				<h1>Hello {user ? user : 'Guest'}</h1>
				<form onSubmit={handleSubmit}>
					<input
						type='file'
						name='image'
						ref={imageInputRef}
						onChange={(ev) => setImage(ev.target.files[0])}
					/>
					<textarea
						name='content'
						value={content}
						onChange={(ev) => setContent(ev.target.value)}
						placeholder='Add content'
					></textarea>
					<button type='submit'>Submit</button>
				</form>
			</div>
		</Container>
	);
};

export default CreatePost;
