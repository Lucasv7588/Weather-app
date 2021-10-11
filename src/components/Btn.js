import React from 'react';

const Btn = ({ text, className, onClick }) => (
	<button 
		className={className}
		onClick={onClick}
	>{text}
	</button>
)

export default Btn;