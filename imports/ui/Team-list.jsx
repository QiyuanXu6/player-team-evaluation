import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import { red500 } from 'material-ui/styles/colors';

export default class TeamList extends Component {

  updateCurrentPlayer(player) {
    console.log("updatingCurrentPlayer");
    this.props.updateCurrentPlayer(player);
  }

  deletePlayer(playerId) {
    Meteor.call('deletePlayer', playerId, (error) => {
      if(error) {
        alert('oups' + error.reason);
      } else {
        console.log('Player deleted!');
      }
    })
  }

  // onClick={this.deletePlayer.bind(this, this.props.player._id)}
//bind(this,args),args就是传入函数的参数
  render() {
    return (
      <ListItem
        primaryText={this.props.player.name}
        leftAvatar={<Avatar src={this.props.player.notes}/>}
        rightIcon={<ActionDeleteForever hoverColor={red500}
          onClick={this.deletePlayer.bind(this, this.props.player._id)}
        />}
        onClick={this.updateCurrentPlayer.bind(this, this.props.player)}
      />
    )
  }
}
