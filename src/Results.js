import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { render } from 'react-dom';

class Results extends React.Component {
	render() {
		return (
			<section>
				<div>
					<Link to={`home/${this.props.title}/`}>
						<h1>{this.props.title}</h1>
					</Link>

					<img src={this.props.image} />
					<div>
						<button>Ingredients</button>
					</div>
				</div>
			</section>
		);
	}
}

export default Results;
