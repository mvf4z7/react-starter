import React from 'react';
import { RouteHandler, Link } from 'react-router'

require('./normalize.scss');
require('./app.scss');

export default class App extends React.Component {
    render() {
        return (
    		<div className='app-wrapper'>
    			<h1 className='app-title'>Welcome to React-Starter</h1>
                <div className='nav'>
                    <Link to="home" className='nav-button' activeClassName='nav-button-active'>Home</Link>
                    <Link to="info" className='nav-button' activeClassName='nav-button-active'>Info</Link>
                </div>
                <RouteHandler />
    		</div>
        );
    }
}
