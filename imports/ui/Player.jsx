import React, { Component } from 'react';
import {Card, CardActions, CardMedia, CardText, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { blue200, blue900 } from 'material-ui/styles/colors';

//carry, mid, offlane, support, hard support, jungler

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: 12,
  },
}

const renderChips = (player) => {
  var doms = [];
  for (var p in player) {
    if (p != "name" && p != "team" && p != "notes" && p != "owner" && p != "_id") {
      doms.push(
        <Chip
          backgroundColor={blue200}
          style={styles.chip}
          key={p}
        >
          <Avatar size={32} color={blue200} backgroundColor={blue900}>{player[p]}</Avatar>
          {p}
        </Chip>
      );
    }
  }
  return doms.map((dom) => {return dom});
}

export default class Player extends Component {
  showEditForm() {
    this.props.showEditForm();
  }
  render() {
    const player = this.props.player;
    return (
      <Card>
        <CardMedia
          overlay={<CardTitle title={player.name} subtitle={"Team: " + player.team} />}
        >
          <img src="Miracle-.png" alt="" />
        </CardMedia>

        <CardText>
          <div style={styles.wrapper}>
            {renderChips(player)}
          </div>
        </CardText>
        <CardActions>
          <RaisedButton
            label="Edit player/stats"
            labelPosition="before"
            style={styles.button}
            onClick={this.showEditForm.bind(this)}
          />
        </CardActions>
      </Card>
    )
  }
}
