import React, { Component } from 'react';
import PubSub from 'pubsub-js'

class InvitationStats extends Component {
  _handleUninviteAll(){
    const newListAllUninvited = this.props.appState.usersList.map( usr =>{
      usr.invited = false
      return usr
    })

    PubSub.publish('updateState', {usersList: newListAllUninvited})

  }

  render() {
    const usersList = this.props.appState.usersList

    const theCount = usersList.reduce((cumulativeObj, usr)=>{
      if(usr.invited) {
        cumulativeObj[usr.nat] += 1
        cumulativeObj.total +=1
      }
      return cumulativeObj
    }, {ES: 0, FR: 0, GB: 0, US: 0, total: 0 })

    return (
      <div className="Invitations-Stats">
        <h2>Invitation Stats</h2>
        <button
          className="uninvite-all"
          onClick={ ()=> this._handleUninviteAll() }

        >Uninvite All</button>

        <p><strong>ES : </strong> {theCount.ES}</p>
        <p><strong>FR : </strong> {theCount.FR}</p>
        <p><strong>GB : </strong> {theCount.GB}</p>
        <p><strong>US : </strong> {theCount.US}</p>
        <hr/>
        <p><strong>Total :</strong> {theCount.total }</p>


      </div>
    );
  }
}

export default InvitationStats;
