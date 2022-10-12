import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='nav-center'>
				<Link to='/'>
					<img
						src={logo}
						alt='cocktail db logo'
						className='logo'
					/>
				</Link>
			</div>
			<ul className='nav-links'>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
