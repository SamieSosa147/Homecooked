import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { render } from 'react-dom';

// Hou comment: As a follow-up challenge, how would you refactor Results to use a functional component + Hooks? In general, how would you refactor your class components that don't rely state to use functional components?
class Results extends React.Component {
	render() {
		// Hou comment: remove any console.log's from your code
		console.log(this.props.ingredients);
		return (
			<section className='Results'>
				<div>
					<Link to={`home/${this.props.title}/`}>
						<h1>{this.props.title}</h1>
					</Link>
					{/* Hou comment: it's considered an SEO best practice to include an alt attribute to describe your images */}
					<img src={this.props.image} />
					<ul>
						{this.props.ingredients.map((ingredient) => {
							return <li>{ingredient.text}</li>;
						})}
					</ul>
				</div>
			</section>
		);
	}
}

export default Results;
