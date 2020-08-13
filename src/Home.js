import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route, Link } from 'react-router-dom';
import Results from './Results';
import Details from './Details';

class Home extends Component {
	render() {
		return (
			// Hou comment: you can use a React fragment <></> here instead of creating an unnecessary div tag: https://reactjs.org/docs/fragments.html
			<>
				{this.props.data.map((recipe, index) => {
					return (
						<Results
							image={recipe.recipe.image}
							title={recipe.recipe.label}
							ingredients={recipe.recipe.ingredients}
						/>
					);
				})}
			</>
		);
	}
}

export default Home;
