import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState('ma');
	const [cocktails, setCocktails] = useState([]);

	// using useCallback hook for fetching only when searchTerm changes
	const fetchDrinks = useCallback(async () => {
		setLoading(true);
		try {
			const response = await fetch(`${url}${searchTerm}`);
			const data = await response.json();
			const { drinks } = data;

			if (drinks) {
				const newCocktails = drinks.map(item => {
					const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
						item;
					// renaming drinks property for an easy use
					return {
						id: idDrink,
						name: strDrink,
						image: strDrinkThumb,
						info: strAlcoholic,
						glass: strGlass,
					};
				});
				setCocktails(newCocktails);
			} else {
				setCocktails([]);
			}
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	}, [searchTerm]);

	useEffect(() => {
		fetchDrinks();
	}, [searchTerm, fetchDrinks]);

	return (
		<AppContext.Provider value={{ loading, cocktails, setSearchTerm }}>
			{children}
		</AppContext.Provider>
	);
};

//custom useGlobalContext for easy use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
