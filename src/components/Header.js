import React from 'react';
import './Header.scss';

const Header = ({ user, onclick }) => {
	return (
		<div className='title'>
			<h1>Hello {user}!</h1>
			<button onClick={onclick}>Logout</button>
		</div>
	);
};

export default Header;
