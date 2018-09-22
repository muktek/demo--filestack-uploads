import React, { Component } from 'react';
import './App.css'
import data from './data/users.json'

import FilterPanel from './components/FilterPanel'
import UsersList from './components/UsersList'
import InvitationStats from './components/InvitationStats'

import PubSub from 'pubsub-js'

class App extends Component {
  state = {
    usersList : [],
    selectedGender : "all", // all, male, female
  }

  componentDidMount(){
    console.log(data.results);

    PubSub.subscribe('updateState', (evtName, data)=>{
      if(typeof data !== 'object') return //no-op 
      this.setState(data)
    })

    this.setState({
      usersList : data.results
    })
  }


  render() {
    console.log('--------');
    console.log('APP STATE');
    console.log(this.state);


    return (
      <div className="App">
        <FilterPanel/>
        <UsersList appState={this.state}/>
        <InvitationStats appState={this.state}/>
      </div>
    );
  }
}

export default App;
