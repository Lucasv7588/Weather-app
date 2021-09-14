import React from 'react';
import Slider from './Slider';


class Search extends React.Component {

	handleClick = e => {
		if(e.target.checked) {
			document.documentElement.setAttribute('data-theme', 'dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.setAttribute('data-theme', 'light');
			localStorage.setItem('theme', 'light');
		}
	}
	render(){
		return(
			<div className="search-container">
				<form className="search-form">
					<input className="search-form__input" type="text" name="search" placeholder="Buscar por ciudad"/>
					<button type="submit" className="search-form__button"><i class="fas fa-search"></i></button>
				</form>
				<Slider 
					onClick={this.handleClick}
				/>
			</div>
		)
	}
}


export default Search