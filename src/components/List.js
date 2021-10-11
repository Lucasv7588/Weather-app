import React from 'react';

const List = ({data, changeWoeid}) => {
	let arr = []
	let count = 0;
	for(let item of data){
		if (count>8)
			break;
		arr.push(<div key={count} className="button-list-container"><button className="button-place" id={item.woeid} onClick={changeWoeid}>{item.title}</button></div>);
		count++;
	}
	return(<div>{arr}</div>);
}

export default List;