import React, { Component } from 'react';
import {Radar} from 'react-chartjs-2';
import Divider from 'material-ui/Divider';



export default class TeamStats extends Component {
  render() {
    const players = this.props.players;
    const data = {
      labels: ['KDA', 'GPM', 'WinRates', 'XPM', 'LH', 'DPM'],
      datasets: [
        {
          label: 'Player radar table',
          backgroundColor: 'rgba(143,202,249,0.2)',
          borderColor: 'rgba(12,71,161,1)',
          pointBackgroundColor: 'rgba(12,71,161,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(12,71,161,1)',
          data: [65, 59, 90, 81, 56, 55]
        }
      ]
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
