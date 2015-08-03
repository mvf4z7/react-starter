import React, { Component } from 'react';

export default class Incrementor extends Component {

	handleAction() {
		this.props.onAction();
	}

	render() {
		return (
			<button onClick={this.handleAction.bind(this)}>Increment</button>
		);
	}
}
