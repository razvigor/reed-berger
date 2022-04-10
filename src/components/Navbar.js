import React from 'react';
import Menu from './Menu';
import MobBtn from './MobBtn';

import './NavBar.scss';

const Navbar = () => {
	const [active, setActive] = React.useState(false);
	return (
		<nav className='navbar'>
			<Menu active={active} setActive={setActive} />
			<MobBtn active={active} setActive={setActive} />
		</nav>
	);
};

export default Navbar;
