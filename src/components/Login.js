import React from 'react';
import Container from './Container';
import { UserContext } from '../App';
import './Login.scss';

const Login = () => {
	const [user, setUser] = React.useContext(UserContext);
	const [message, setMessage] = React.useState('');
	function handleSubmit(ev) {
		ev.preventDefault();
		if (user) {
			setUser(user);
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
						value={user}
						onChange={(ev) => {
							setUser(ev.target.value);
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
