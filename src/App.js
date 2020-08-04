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
				console.log(this.state.data);
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
				<nav>{/* <Link to="/home">Home</Link> */}</nav>
				<div>
					{/* <Link to="/search"> */}

					<form onSubmit={this.handleSubmit}>
						<h1>Main Ingredient</h1>
						<input
							type='text'
							onChange={this.handleChange}
							value={this.state.search}
						/>
						{/* <Link to="/search"> */}
						<button type='submit'>submit</button>
						{/* </Link>     */}
					</form>

					{/* </Link> */}
					{/* <Route path={"/home"} component={App}/> */}
				</div>
				<Home data={this.state.data} />
				<Route path={'/:title'} Component={Details} />
			</section>
		);
	}
}
export default App;
