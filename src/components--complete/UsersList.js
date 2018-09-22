import React, { Component } from 'react';
import User from './User'

class UsersList extends Component {

  render() {
    const userList = this.props.appState.usersList
    const selectedGender = this.props.appState.selectedGender
    const userComponents = userList
      .filter( uData => {
        if(this.props.appState.selectedGender === 'all') return true
        if(uData.gender === this.props.appState.selectedGender) return true
        return false
      })
      .map( (uData,i) => <User {...uData} appState={this.props.appState} key={i}/> )
    return (
      <div className="Users-List">
        <h2>Users List</h2>
        <div className="user-list-container">
          {userComponents}
        </div>
      </div>
    );
  }
}

export default UsersList;
