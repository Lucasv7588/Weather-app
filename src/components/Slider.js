import React from 'react';


const Slider = ({onClick}) => (
		<div className="slider-container">
			<label className="switch">
				<input type="checkbox" 
					onClick={onClick}
				/>
				<span className="slider round"></span>
			</label>
		</div>
)

export default Slider
