import React from 'react';

const MobBtn = ({ active, setActive }) => {
	function handleClick() {
		setActive(!active);
	}
	return (
		<button
			className={`mob-btn${active ? ' active' : ''}`}
			onClick={handleClick}
		>
			<span></span>
			<span></span>
			<span></span>
		</button>
	);
};

export default MobBtn;
