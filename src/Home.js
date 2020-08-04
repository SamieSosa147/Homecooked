import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route, Link } from 'react-router-dom';
import Results from './Results';
import Details from './Details';

class Home extends Component {
	render() {
		return (
			<div>
				{this.props.data.map((recipe, index) => {
					return (
						<Results
							image={recipe.recipe.image}
							title={recipe.recipe.label}
							ingredients={recipe.recipe.ingredients}
						/>
					);
				})}
				<div></div>
			</div>
		);
	}
}

export default Home;
