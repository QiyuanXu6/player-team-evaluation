import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//database - Collection
import { Players } from '../api/players';

import TeamList from './Team-list';
import TeamStats from './Team-stats';
import Player from './Player';
import AccountsWrapper from './AccountsWrapper';
import Edit from './EditPlayer';

const tempPlayer = {
  name: "Temp player",
  team: "Temp team",
  KDA: 5 ,
  GPM: 400 ,
  HD:50 ,
  XPM: 400 ,
  TD: 20 ,
  HH: 400 ,
  notes: "Miracle-.png",
};

class App extends Component {
  constructor(props) {
    super(props);
    //setting up the state
    this.state = {
      currentPlayer: tempPlayer,
      showEditPlayer: false,
    };
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
    this.showTeamStats = this.showTeamStats.bind(this);
  }

  renderPlayers() {
    console.log(this.props.currentPlayer);
    console.log(this.props.players);
    if (this.props.players.length == 0) {
      return (<h2>No player in database</h2>)
    } else {
      return this.props.players.map((player) => {
        return <TeamList key={player._id} player={player} updateCurrentPlayer={this.updateCurrentPlayer}/>
      });
    }
  }

  updateCurrentPlayer(player) {
    this.setState({
      currentPlayer: player,
    })
  }

  showEditForm() {
    this.setState({
      showEditPlayer: true,
    });
  }

  showTeamStats() {
    this.setState({
      showEditPlayer: false,
    });
  }

  showForm() {
    if(this.state.showEditPlayer === true) {
      return (
        <Edit currentPlayer={this.state.currentPlayer}
        showTeamStats={this.showTeamStats}
        />
      );
    } else {
      return (
        <TeamStats players={this.props.players}/>
      );
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar
            title="Game Player Application"
            iconClassNameRight="muidocs-icon-navigation-expend-more"
            showMenuIconButton={false} >
            <AccountsWrapper />
          </AppBar>
          <div className="row">
            <div className="col s12 m5"><Player player={this.state.currentPlayer} showEditForm={this.showEditForm}/></div>
            <div className="col s12 m7">
              <h2>Team List</h2><Link to="/new" className="waves-effect waves-light btn">Add player</Link>
              <Divider/>
                <List>
                  {this.renderPlayers()}
                </List>
              <Divider/>
            </div>
            <div className="row">
              <div className="col s12"><br/><Divider />{this.showForm()}<Divider /></div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  players: PropTypes.array.isRequired,
};

export default AppContainer = createContainer(() => {
  //serve找到所有Players，用players传递，publish subscribe，接着Container得到了
  //这部分数据，return在对这部分数据进行查找
  Meteor.subscribe('players');

  const user = Meteor.userId();
  return {
    players: Players.find({}, {sort: {name: 1}}).fetch(),
    players: Players.find({ owner: user }, {sort: {name: 1}}).fetch()
  };
}, App);
