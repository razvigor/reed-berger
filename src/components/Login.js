import React from 'react';
import Container from './Container';
import './Login.scss';

const Login = ({ setUser }) => {
	const [username, setUsername] = React.useState('');
	function handleSubmit(ev) {
		ev.preventDefault();
		setUser(username);
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
					<button type='submit'>Submit</button>
				</form>
			</div>
		</Container>
	);
};

export default Login;
