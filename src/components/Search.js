import React from 'react';
import ThemeSlider from './ThemeSlider';


const Search = () => (
	<div className="search-container">
		<form className="search-form">
			<input className="search-form__input" type="text" name="search" placeholder="Buscar por ciudad"/>
			<button type="submit" className="search-form__button"><i class="fas fa-search"></i></button>
		</form>
		<ThemeSlider />
	</div>
)

export default Search