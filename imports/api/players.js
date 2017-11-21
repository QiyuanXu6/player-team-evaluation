import { Mongo } from 'meteor/mongo';

export const Players = new Mongo.Collection('players');

Players.allow({
  insert() { return false; },
  update() { return false; },
  remove() { return false; },
});

Players.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

const PlayerSchema = new SimpleSchema({
  name: { type: String, },
  team: { type: String, },
  KDA: { type: Number, defaultValue: 0, decimal: true},
  GPM: { type: Number, defaultValue: 0, decimal: true},
  HD: { type: Number, defaultValue: 0, decimal: true},
  XPM: { type: Number, defaultValue: 0, decimal: true},
  TD: { type: Number, defaultValue: 0, decimal: true},
  HH: { type: Number, defaultValue: 0, decimal: true},
  notes: { type: String, optional: true},
  owner: { type: String },
});

Players.attachSchema(PlayerSchema);
