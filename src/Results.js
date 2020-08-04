import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { render } from 'react-dom';

class Results extends React.Component {
	render() {
		console.log(this.props.ingredients);
		return (
			<section className='Results'>
				<div>
					<Link to={`home/${this.props.title}/`}>
						<h1>{this.props.title}</h1>
					</Link>

					<img src={this.props.image} />
					<ul>
						{this.props.ingredients.map((ingredient) => {
							return <li>{ingredient.text}</li>;
						})}
					</ul>
					<div></div>
				</div>
			</section>
		);
	}
}

export default Results;
