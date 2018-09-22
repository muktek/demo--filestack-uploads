import React, { Component } from 'react';
import PubSub from 'pubsub-js'


class FilterPanel extends Component {

  _handleGenderClick(genderSelected){
    PubSub.publish('updateState', { selectedGender : genderSelected  } )
  }

  render() {
    return (
      <div className="User-Panel">
        <h2>Filter Users</h2>
        <h4>Gender</h4>
          <span
            onClick={()=> this._handleGenderClick('all') }
            className="option-gender option-gender--all option--selected" >All</span>
          <span
            onClick={()=> this._handleGenderClick('male') }
            className="option-gender option-gender--male" >&#9794;</span>
          <span
            onClick={()=> this._handleGenderClick('female') }
            className="option-gender option-gender--female" >&#9792;</span>
      </div>
    );
  }
}

export default FilterPanel;
