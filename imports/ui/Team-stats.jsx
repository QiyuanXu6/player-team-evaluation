import React, { Component } from 'react';
import {Radar} from 'react-chartjs-2';
import Divider from 'material-ui/Divider';



export default class TeamStats extends Component {

  radar() {
    const players = this.props.players.slice(0, 5);
    return players.map((player) => {
      return {
          label: player.name,
          backgroundColor: 'rgba(143,202,249,0.2)',
          borderColor: 'rgba(12,71,161,1)',
          pointBackgroundColor: 'rgba(12,71,161,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(12,71,161,1)',
          data: [player.KDA, player.GPM, player.HD, player.XPM, player.TD, player.HH]
      }
    });
  }

  render() {

    const data = {
      labels: ['KDA', 'Gold PM', 'Hero Damage', 'Ex PM', 'Tower Damage', 'Healing'],
      datasets: this.radar(),
    };
    return (
      <div>
        <h2>Team Stats</h2>
        <div className="row">
          <div className="col s12 m7">
          <Radar data={data}
            width={500}
            height={500}
            option={{
              maintainAspectRatio: false,
            }}/>
          </div>
          <div className="col s12 m5">
            <h4> Scores </h4>
            <Divider />
            <h4> Team's offense: </h4>
            <Divider />
            <h4>players</h4>
          </div>
        </div>
      </div>
    )
  }
}
