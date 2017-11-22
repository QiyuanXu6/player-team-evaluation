import React, { Component } from 'react';
import {Players} from '../api/players';



export default class New extends Component {
  constructor(props) {
    super(props);
    this.meteorInsert = this.meteorInsert.bind(this);
    this.submitPlayer = this.submitPlayer.bind(this);
  }

  meteorInsert(player) {
    Meteor.call('insertPlayer', player, (error) => {
      if (error) {
        alert("Oups "+error.reason);
      } else {
        alert("Added");
        this.props.history.push('/');
      }
    });
  }

  submitPlayer(event) {
    event.preventDefault();


    var apiRequest1 = fetch(`https://api.opendota.com/api/players/${this.refs.sid.value}/totals/?limit=10`).then(function(response){ 
      return response.json()
    });
    var apiRequest2 = fetch(`https://api.opendota.com/api/players/${this.refs.sid.value}`).then(function(response){
      return response.json()
    });
    
    Promise.all([apiRequest1,apiRequest2]).then(function(values){
      var data = values[0];
      var role = values[1];
      console.log(role.profile.personaname);

      var data_KDA = data[3].sum / data[3].n;
      var data_GPM = data[4].sum / data[4].n;
      var data_XPM = data[5].sum / data[5].n;
      var data_HD = data[11].sum / data[11].n;
      var data_TD = data[12].sum / data[12].n;
      var data_HH = data[13].sum / data[13].n;

      let player = {
        name:role.profile.personaname ,
        team:"Default" ,
        KDA: data_KDA,
        GPM: data_GPM,
        HD: data_HD ,
        XPM: data_XPM,
        TD: data_TD ,
        HH: data_HH,
        notes: role.profile.avatarfull,
        createdAt: new Date(),
        owner: Meteor.userId(),
      };
      this.meteorInsert(player);
    }.bind(this));
  }

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
          <h3>Add a new player</h3>
          <div className="row">

            <div className="input-field col s4">
              <input placeholder="Name" ref="name" type="text" className="validate" />
            </div>
            <div className="input-field col s4">
              <input placeholder="Team" ref="team" type="text" className="validate" />
            </div>

            <div className="input-field col s4">
              <input placeholder="Steam id (32)" ref="sid" type="text" className="validate" />
            </div>

          </div>

          <div className="row">

            <div className="input-field col s6">
              <input placeholder="KDA" ref="KDA" type="text" className="validate" />
            </div>
            <div className="input-field col s6">
              <input placeholder="GPM" ref="GPM" type="text" className="validate" />
            </div>
            <div className="input-field col s6">
              <input placeholder="HD" ref="HD" type="text" className="validate" />
            </div>
            <div className="input-field col s6">
              <input placeholder="XPM" ref="XPM" type="text" className="validate" />
            </div>
            <div className="input-field col s6">
              <input placeholder="TD" ref="TD" type="text" className="validate" />
            </div>
            <div className="input-field col s6">
              <input placeholder="HH" ref="HH" type="text" className="validate" />
            </div>

          </div>

          <div className="row">

            <div className="input-field col s6">
              <input placeholder="Notes" ref="notes" type="text" className="materialize-textarea" />
            </div>
            <div className="input-field col s6">
              <button className="btn waves-effect waves-light"
              type="submit" name="action">
                Submit
                <i className="material-icons right">send</i>
              </button>
            </div>

          </div>
        </form>
      </div>
    )
  }
}
