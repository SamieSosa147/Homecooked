import React, { Component } from 'react';
import './App.css';
import Results from './Results';
import { Route, Link, Router } from 'react-router-dom';
import Details from './Details';
import Home from './Home';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			data: [],
			search: '',
		};
	}
	getData = (search) => {
		let Id = '38f30bc0';
		let key = '0c4c2cf770237683afd478fb2c8313a7';
		fetch(
			`https://api.edamam.com/search?q=${search}&app_id=${Id}&app_key=${key}`
		)
			.then((res) => res.json())
			.then((json) => {
				this.setState({ data: json.hits });
				// console.log(this.state.data);
			});
	};
	handleSubmit = (event) => {
		event.preventDefault();
		this.getData(this.state.search);
		// this.setState({ search: event.target.value });

		// alert("hello")
	};
	handleChange = (e) => {
		// console.log(e.target.value);
		this.setState({ search: e.target.value });
	};

	render() {
		return (
			<section>
				<div>
					<form className='form' onSubmit={this.handleSubmit}>
						<h1>Home-Cooked</h1>
						<input
							className=' search-box'
							type='text'
							onChange={this.handleChange}
							value={this.state.search}
						/>
						<button className='Submit-button' type='submit'>
							Munch-Time!
						</button>
					</form>

					<Home data={this.state.data} />
				</div>
			</section>
		);
	}
}
export default App;
