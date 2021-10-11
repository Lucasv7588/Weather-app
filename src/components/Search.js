import React from 'react';
import LocationList from './LocationList'
import Btn from './Btn'

class Search extends React.Component {

	state = {
		search: ""
	}

	handleChange = e =>{
		this.setState({
			search: e.target.value
		})
	}
	
	render(){
		const { search } = this.state;
		const { toggleSearch, changeWoeid } = this.props;
	
		return(
			<aside className="aside" id="aside">
				<Btn 
					text="Volver"
					className="search-toggle"
					onClick={toggleSearch}
				/>
				<form className="search-form" onSubmit={this.getLocationByName} autoComplete="off">
					<input 
						type="text" 
						name="search" 
						value={search}
						onChange={this.handleChange}
						placeholder="Buscar por ubicación" 
						className="search-form__input" 
					/>
				</form>
				<LocationList 
					search={search}
					changeWoeid={changeWoeid}
				/>

			</aside>
		)
	}
}


export default Search