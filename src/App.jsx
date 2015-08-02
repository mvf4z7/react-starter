import React, { Component } from 'react';
import Incrementor from './Incrementor';
import Decrementor from './Decrementor';

export default class App extends Component {

	state = {
		counter: 0,
		my_name: 'Mike'
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

	incrementCounter(step) {
		this.state.counter++;
		this.setState(this.state);
	}

	decrementCounter(ste) {
		this.state.counter--;
		this.setState(this.state);
	}

  render() {
    return (
    	<div>
			<h1>hot load!</h1>
	    	<h1>Friangle</h1>
			<button onClick={function(){console.log('hello world');}}>don't click me</button>
	      	<h3>Rotating at variable speeds</h3>
	      	<h5>{ this.state.counter }</h5>
	      	<Incrementor onAction={this.incrementCounter.bind(this)}/>
	      	<Decrementor counter={this.state.counter} onAction={this.decrementCounter.bind(this)}/>
      	</div>
    );
  }
}
