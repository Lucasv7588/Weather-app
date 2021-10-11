import React from 'react';
import List from './List'
import Loading from './Loading'
import Error from './Error'
import { weatherAPI } from '../utils.js';


class LocationList extends React.Component {
	state = {
		isLoaded: false,
		error: null,
		data: []
	}

	fetchData = () => {
		const { search } = this.props;
		this.setState({
			isLoaded: false
		})
		if(search !== ""){
			fetch(`${weatherAPI}/location/search/?query=${search}`)
			.then( response => response.json())
			.then(
				async (data) => {
					this.setState({
						isLoaded: true,
						data
					})
				},
				(error) =>{
					this.setState({
						isLoaded: true,
						error
					})
				})
		} else {
			this.setState({
				isLoaded: true,
				error: null,
				data: []
			})
		}
	}

	componentDidUpdate = (prevProps) => {
		if(prevProps.search !== this.props.search)
			this.fetchData();
	}

	componentDidMount = () => {
		this.fetchData();
	}

	render(){
		const { changeWoeid } = this.props;
		const { isLoaded, error, data } = this.state;

		if(!isLoaded){
			return(
				<Loading />
				)
		}
		if(error){
			return(<Error 
					error={error.message}
				/>)
		}
		return(<List 
				data={data}
				changeWoeid={changeWoeid}
				/>)
	}
}
export default LocationList;