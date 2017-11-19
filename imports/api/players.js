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
  KDA: { type: Number, defaultValue: 0},
  GPM: { type: Number, defaultValue: 0},
  WinRates: { type: Number, defaultValue: 0},
  XPM: { type: Number, defaultValue: 0},
  LH: { type: Number, defaultValue: 0},
  DPM: { type: Number, defaultValue: 0},
  notes: { type: String, optional: true},
  owner: { type: String },
});

Players.attachSchema(PlayerSchema);
