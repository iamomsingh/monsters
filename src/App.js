import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/card-lists/card-list.components';
import {SearchBox} from './components/search-box/search-box.components.jsx'
class App extends Component {
  constructor(){
    super();
    this.state = { 
      monsters: [],
      searchField: ''
     };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({monsters:user}));
  }

  onSearchChange = event => {
    this.setState({searchField:event.target.value});
  }

  render() { 

    const {monsters,searchField} = this.state;

    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()) 
    );

    return (
      <div className='App'>
        <h1 className='cent'> Monsters Rolodex </h1>
        <SearchBox placeholder = {"Monster-Search"}onSearchChange = {this.onSearchChange}/>
        <CardList monsters = {filteredMonsters}> </CardList>    
      </div>  
    );
  }
}
 
export default App;