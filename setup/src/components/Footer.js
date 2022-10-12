import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

export const Footer = () => {
	return (
		<footer className='footer-section'>
			<div>
				<Link to='/'>
					<img
						src={logo}
						alt='cocktail db logo'
						className='logo'
					/>
				</Link>
				<p>&copy;Mr Jiks 2022.</p>
			</div>
			<ul className='nav-links'>
				<p className='drink-data'>Credit:</p>
				<span>
					<a href='https://www.thecocktaildb.com/'>The cocktail database</a>
				</span>
			</ul>
		</footer>
	);
};
