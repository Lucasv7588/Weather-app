import React from 'react';


class ThemeSlider extends React.Component{


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
			<div className="slider-container">
				<label className="switch">
					<input type="checkbox" 
						onClick={this.handleClick}
					/>
					<span className="slider round"></span>
				</label>
			</div>
		)
	}
}

export default ThemeSlider
