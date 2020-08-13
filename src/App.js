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
		// Hou comment: please store your api key in a .env file. See https://git.generalassemb.ly/seir-622/project-2/blob/master/project-setup-and-deployment-guide.md#storing-api-keys-outside-of-github for more details
		let key = '0c4c2cf770237683afd478fb2c8313a7';

		// Hou comment: as a follow up challenge, read about the async/await pattern and try to refactor
		// your fetch call to use that pattern: https://dev.to/shoupn/javascript-fetch-api-and-using-asyncawait-47mp
		fetch(
			`https://api.edamam.com/search?q=${search}&app_id=${Id}&app_key=${key}`
		)
			.then((res) => res.json())
			.then((json) => {
				this.setState({ data: json.hits });
				// Hou comment: make sure to delete any unused code from your files, like line 26 below
				// console.log(this.state.data);
			});
	};
	handleSubmit = (event) => {
		event.preventDefault();
		this.getData(this.state.search);
	};

	// Hou comment: use `event` as the variable name instead of `e`, because the former is
	// more descriptive
	handleChange = (event) => {
		this.setState({ search: event.target.value });
	};

	render() {
		return (
			<section>
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
			</section>
		);
	}
}
export default App;
