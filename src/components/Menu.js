import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

const Menu = ({ active, setActive }) => {
	function handleClick() {
		if (window.innerWidth <= 600) {
			setActive(false);
		}
	}
	return (
		<ul className={`menu${active ? ' active' : ''}`} onClick={handleClick}>
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
	);
};

export default Menu;
