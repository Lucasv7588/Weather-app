import React from 'react';
import Slider from './Slider';


class Search extends React.Component {

	
	render(){
		const { handleTheme, handleSearch } = this.props;
		return(
			<div className="search-container">
				<form className="search-form" onSubmit={handleSearch}>
					<input className="search-form__input" type="text" name="search" placeholder="Buscar por ciudad"/>
					<button type="submit" className="search-form__button"><i className="fas fa-search"></i></button>
				</form>
				<span className="theme-selector">Theme Selector:</span>
				<Slider 
					onClick={handleTheme}
				/>
			</div>
		)
	}
}


export default Search