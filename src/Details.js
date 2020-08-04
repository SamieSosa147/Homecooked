import React, { Component } from 'react';
// import { render } from 'react-dom';
// import { Route, Link } from 'react-router-dom';

class Details extends Component {
	render() {
		console.log(this.props);
		return (
			<section>
				<div>{this.props.title}</div>
			</section>
		);
	}
}

export default Details;
