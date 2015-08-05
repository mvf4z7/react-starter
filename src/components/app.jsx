import React from 'react';
import { RouteHandler, Link } from 'react-router'

require('./app.scss');

export default class App extends React.Component {
    render() {
        return (
    		<div className='app-wrapper'>
    			<h1>Welcome to React-Starter</h1>
                <Link to="home">Click to visit the home page</Link>
                <RouteHandler />
    		</div>
        );
    }
}
