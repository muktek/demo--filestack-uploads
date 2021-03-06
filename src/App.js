// [I]

import React, { Component } from 'react';
import './App.css'
import data from './data/users.json'

import FilterPanel from './components/FilterPanel'
import UsersList from './components/UsersList'
import InvitationStats from './components/InvitationStats'

/*[a.1]*/
// import PubSub from 'pubsub-js'

class App extends Component {
  // [II]
  state = {
    usersList : data.results,
    selectedGender : "all", // all, male, female
  }

  componentDidMount(){
    console.log(data.results);

    // [a.2]
    // PubSub.subscribe('updateState', (evtName, data)=>{
    //   // [a.3]
    //   if(typeof data !== 'object') return //no-op
    //   this.setState(data)
    // })


  }


  render() {
    console.log('--------');
    console.log('APP STATE');
    console.log(this.state);


    return (
      // III
      <div className="App">
        <FilterPanel/>
        {/*[b.1]
          <UsersList appState={this.state}/>
          <InvitationStats appState={this.state}/>

        */}
      </div>
    );
  }
}

export default App;
