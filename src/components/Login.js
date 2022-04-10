import React from 'react';
import Container from './Container';
import './Login.scss';

const Login = ({ setUser }) => {
	const [username, setUsername] = React.useState('');
	const [message, setMessage] = React.useState('');
	function handleSubmit(ev) {
		ev.preventDefault();
		if (username) {
			setUser(username);
		} else {
			setMessage('You must fill field username.');
		}
	}
	return (
		<Container>
			<div className='login'>
				<h1>Login</h1>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						name='name'
						placeholder='Input username'
						value={username}
						onChange={(ev) => {
							setUsername(ev.target.value);
						}}
					/>
					<p>{message}</p>
					<button type='submit'>Submit</button>
				</form>
			</div>
		</Container>
	);
};

export default Login;
