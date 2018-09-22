import React, { Component } from 'react';
import PubSub from 'pubsub-js'


class User extends Component {
  _toggleUserInviteStatus(thisUserEmail){
    const updatedUserList = this.props.appState.usersList.map( u => {
      if( u.email === thisUserEmail ){
        u.invited = !u.invited
      }
      return u
    })

    PubSub.publish('updateState', { usersList: updatedUserList} )
  }

  render() {
    const appState = this.props.appState

    let inviteBtnTxt = 'Invite'

    if(this.props.invited) inviteBtnTxt = 'Uninvite'

    return (
      <div className="user">
        <button
          onClick={ ()=>{ this._toggleUserInviteStatus(this.props.email) } }
          className="user__invite-btn">{inviteBtnTxt}
        </button>

        <img className="user__img" src={this.props.picture.thumbnail}/>
        <p className="user__email">{this.props.email}</p>
      </div>
    );
  }
}

export default User;
