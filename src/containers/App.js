import React, {Component} from 'react';
import CardArray from '../components/CardArray';
import SearchBox from '../components/SearchBox';
import { robots } from '../robots';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component
{
	constructor()
	{
		super();
		this.state = {
			robots : [],
			searchfield : ''
		}
	}

	componentDidMount()
	{
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots:users}));
	}

	onSearchChange = (event) =>
	{
		this.setState({searchfield:event.target.value})
	}

	render()
	{
		const filteredrobots = this.state.robots.filter(robots =>
		{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		return(
			<div className='tc'>
				<h1 className='f1'>ROBOFRIENDS</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardArray robots={filteredrobots}/>
				</Scroll>
			</div>
		);
	}
}

export default App;