import React, { Component } from 'react';

export default class EditPlayer extends Component {
  showTeamStats() {
    this.props.showTeamStats();
  }
  editPlayer(event) {
    event.preventDefault();
    let player = {
      _id: this.props.currentPlayer._id,
      name:this.refs.name.value ,
      team:this.refs.team.value ,
      KDA:this.refs.KDA.value ,
      GPM:this.refs.GPM.value ,
      HD:this.refs.HD.value ,
      XPM:this.refs.XPM.value ,
      TD:this.refs.TD.value ,
      HH:this.refs.HH.value ,
      notes: this.refs.notes.value,
      createdAt: new Date(),
      owner: Meteor.userId(),
    };
    Meteor.call('updatePlayer', player, (error) => {
      if (error) {
        alert("Oups"+error.reason);
      } else {
        alert("updated");
        this.showTeamStats();
        // this.props.history.push('/');
      }
    });

  }

  render() {

    const currentPlayer = this.props.currentPlayer;

    return (
      <div className="row">
        <form className="col s12" onSubmit={this.editPlayer.bind(this)}>
          <h3>Edit player</h3>
          <div className="row">

            <div className="input-field col s6">
              <input placeholder="Name" ref="name" type="text" className="validate" defaultValue={currentPlayer.name}/>
            </div>
            <div className="input-field col s6">
              <input placeholder="Team" ref="team" type="text" className="validate" defaultValue={currentPlayer.team} />
            </div>

          </div>

          <div className="row">

            <div className="input-field col s6">
              <input placeholder="KDA" ref="KDA" type="text" className="validate" defaultValue={currentPlayer.KDA}/>
            </div>
            <div className="input-field col s6">
              <input placeholder="GPM" ref="GPM" type="text" className="validate" defaultValue={currentPlayer.GPM}/>
            </div>
            <div className="input-field col s6">
              <input placeholder="HD" ref="HD" type="text" className="validate" defaultValue={currentPlayer.HD}/>
            </div>
            <div className="input-field col s6">
              <input placeholder="XPM" ref="XPM" type="text" className="validate" defaultValue={currentPlayer.XPM}/>
            </div>
            <div className="input-field col s6">
              <input placeholder="TD" ref="TD" type="text" className="validate" defaultValue={currentPlayer.TD}/>
            </div>
            <div className="input-field col s6">
              <input placeholder="DPM" ref="DPM" type="text" className="validate" defaultValue={currentPlayer.DPM}/>
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
