import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
	const { setSearchTerm } = useGlobalContext();

	const searchValue = React.useRef('');

	// React.useEffect(() => {
	// 	searchValue.current.focus();
	// }, []);

	const handleSubmit = e => {
		e.preventDefault();
	};

	const searchCocktail = () => {
		// set the value for the fetch query term in context api
		setSearchTerm(searchValue.current.value);
	};
	return (
		<section className='section search'>
			<form
				className='search-form'
				onSubmit={handleSubmit}
			>
				<div className='form-control'>
					<label htmlFor='name'>search your favourite cocktails.</label>
					<input
						type='text'
						id='name'
						ref={searchValue}
						placeholder='&#128269;'
						onChange={searchCocktail}
						autoFocus
					/>
				</div>
			</form>
		</section>
	);
};

export default SearchForm;
