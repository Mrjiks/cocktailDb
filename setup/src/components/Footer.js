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

				<div className='footer-links'>
					<span>
						<span className='drink-data'>Credit:</span>
						<a href='https://www.thecocktaildb.com/'>The cocktail database</a>
					</span>
					<p>Made in ❤️ with React JS</p>
				</div>
			</div>
		</footer>
	);
};
