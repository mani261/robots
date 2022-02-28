import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
// import { robots } from '../components/robots';
import SearchFeild from '../components/SearchFeild';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfeild: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(users => { this.setState({ robots: users }) });
    }

    onSearchChange = (event) => {
        this.setState({ searchfeild: event.target.value })

    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfeild.toLowerCase());
        });
        if (this.state.robots.length === 0) {
            return (<h1>Loading...</h1>)
        } else {
            return (
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <SearchFeild searchChange={this.onSearchChange} />
                    <CardList robots={filteredRobots} />
                </div>
            )            
        }

    };


}

export default App;