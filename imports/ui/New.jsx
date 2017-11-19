import React, { Component } from 'react';
import {Players} from '../api/players';

export default class New extends Component {
  submitPlayer(event) {
    event.preventDefault();
    let player = {
      name:this.refs.name.value ,
      team:this.refs.team.value ,
      KDA:this.refs.KDA.value ,
      GPM:this.refs.GPM.value ,
      WinRates:this.refs.WinRates.value ,
      XPM:this.refs.XPM.value ,
      LH:this.refs.LH.value ,
      DPM:this.refs.DPM.value ,
      notes: this.refs.notes.value,
      createdAt: new Date(),
      owner: Meteor.userId(),
    };
    Meteor.call('insertPlayer', player, (error) => {
      if (error) {
        alert("Oups"+error.reason);
      } else {
        alert("Added");
        this.props.history.push('/');
      }
    });

  }

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
          <h3>Add a new player</h3>
          <div className="row">

            <div className="input-field col s6">
              <input placeholder="Name" ref="name" type="text" className="validate" />
            </div>
            <div className="input-field col s6">
              <input placeholder="Team" ref="team" type="text" className="validate" />
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
              <input placeholder="WinRates" ref="WinRates" type="text" className="validate" />
            </div>
            <div className="input-field col s6">
              <input placeholder="XPM" ref="XPM" type="text" className="validate" />
            </div>
            <div className="input-field col s6">
              <input placeholder="LH" ref="LH" type="text" className="validate" />
            </div>
            <div className="input-field col s6">
              <input placeholder="DPM" ref="DPM" type="text" className="validate" />
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
