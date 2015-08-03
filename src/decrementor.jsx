import React, { Component } from 'react';

export default class Decrementor extends Component {

	handleAction() {
		this.props.onAction();
	}

	render() {
		return (
			<button onClick={this.handleAction.bind(this)}>Decrement</button>
		);
	}
}
