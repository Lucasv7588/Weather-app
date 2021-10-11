import React from 'react';
import Slider from './Slider.js'

const Converter = ({handleTemp}) => (
	<div className="converter">
		<span className="converter__celsius">Cº</span>
			<Slider
				onClick={handleTemp}
			 />
		<span className="converter__farenheith">Fº</span>
	</div>
)

export default Converter