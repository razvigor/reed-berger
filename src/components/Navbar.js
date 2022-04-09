import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<ul>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li>
					<NavLink to='/post-list'>Post List</NavLink>
				</li>
				<li>
					<NavLink to='/create-post'>Create Post</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
