import React, { Component } from 'react';
import Incrementor from './incrementor';
import Decrementor from './decrementor';

export default class App extends Component {

	state = {
		counter: 0,
		myName: 'Mike'
	}

	componentWillMount() {
		console.log('Will Mount');
	}

	componentDidMount() {
		console.log('Did mount');
	}

	componentWillUpdate() {
		console.log('Component will update');
	}

	componentDidUpdate() {
		console.log('Component did update');
	}

	incrementCounter() {
		this.state.counter++;
		this.setState(this.state);
	}

	decrementCounter() {
		this.state.counter--;
		this.setState(this.state);
	}

  render() {
    return (
		<div>
			<h1>React Starter Kit!</h1>
			<button onClick={function(){ console.log('hello world'); }}>I print to console</button>
			<h5>{ this.state.counter }</h5>
			<Incrementor onAction={this.incrementCounter.bind(this)}/>
			<Decrementor counter={this.state.counter} onAction={this.decrementCounter.bind(this)}/>
		</div>
    );
  }
}
