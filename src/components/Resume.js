import React from 'react';
import Search from './Search';
import Data from './Data'
import Loading from './Loading'
import Error from './Error'
import { weatherAPI, } from '../utils.js';


class Resume extends React.Component {

	state = {
		isLoaded: false,
		data: null,
		error: null,
		toggleSearch: false,
	}

	toggleSearch = () => {
		this.setState({
			toggleSearch: !(this.state.toggleSearch)
		})
	}


	handleTheme = e => {
		if(e.target.checked) {
			document.documentElement.setAttribute('data-theme', 'dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.setAttribute('data-theme', 'light');
			localStorage.setItem('theme', 'light');
		}
	}

	fetchWeather = (woeid) => {
		this.setState({
			isLoaded: false,
			toggleSearch: false
		})
		fetch(`${weatherAPI}/location/${woeid}`)
		.then( response => response.json())
		.then(
			(data) => {
				this.setState({
					isLoaded: true,
					data
				})
			},
			(error) => {
				this.setState({
					isLoaded: true,
					error
				})
			})
	}

	componentDidMount() {
		this.fetchWeather(this.props.woeid);
	}

	componentDidUpdate(prevProps) {
		if(this.props.woeid !== prevProps.woeid) {
			this.fetchWeather(this.props.woeid);
		}
	}

	render() {
		const { system, units, changeWoeid } = this.props;
		const { isLoaded, data, error, toggleSearch } = this.state;
		if(error){
			return(
				<Error 
					error={error.message}
				/>
			)
		}
		if(!isLoaded){
			return(
				<Loading />
			)
		}
		if(toggleSearch){
			return(
				<Search 
					toggleSearch={this.toggleSearch}
					changeWoeid={changeWoeid}
				/>
			)
		}else{
			return(
				<Data 
					data={data}
					system={system}
					units={units}
					handleTheme={this.handleTheme}
					toggleSearch={this.toggleSearch}
				/>
			)
		}
		
	}
}

export default Resume