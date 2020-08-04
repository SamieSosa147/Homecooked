import React, { Component } from 'react';
// import { render } from 'react-dom';
// import { Route, Link } from 'react-router-dom';
import Results from './Results';
import Details from './Details';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// data: [],
			// search: '',
		};
	}
	// getData = (search) => {
	// 	let Id = '38f30bc0';
	// 	let key = '0c4c2cf770237683afd478fb2c8313a7';

	// 	fetch(
	// 		`https://api.edamam.com/search?q=${search}&app_id=${Id}&app_key=${key}`
	// 	)
	// 		.then((res) => res.json())
	// 		.then((json) => {
	// 			this.setState({ data: json.hits });
	// 			// console.log(this.state.data[0].recipe.label);
	// 		});
	// };
	// handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	this.getData(this.state.search);
	// 	// this.setState({ search: event.target.value });

	// 	// alert("hello")
	// };
	// handleChange = (e) => {
	// 	// console.log(e.target.value);
	// 	this.setState({ search: e.target.value });};
	render() {
		console.log(this.props.data);
		return (
			<div>
				{/* {this.props.data.map((recipe => {
                  return <Results image={recipe.image} />
              }
              )} */}
				{this.props.data.map((recipe) => (
					<Results
						image={recipe.recipe.image}
						title={recipe.recipe.label}
						ingredients={recipe.recipe.ingredients}
					/>
				))}
			</div>

			// <div>
			// // <div>
			// // 	<form onSubmit={this.handleSubmit}>
			// // 		<h1>Main Ingredient</h1>
			// // 		<input
			// // 			type='text'
			// // 			onChange={this.handleChange}
			// // 			value={this.state.search}
			// // 		/>
			// // 		<button type='submit'>submit</button>
			// // 	</form>
			// {props.data.map((recipe) => (
			// 	<Results
			// 		image={recipe.recipe.image}
			// 		title={recipe.recipe.label}
			// 		ingredients={recipe.recipe.ingredients}
			// 	/>
			// ))}
		);
	}
}

export default Home;
