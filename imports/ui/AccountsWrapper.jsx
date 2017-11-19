import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

export default class AccountsWrapper extends Component {
  componentDidMount() {
    this.view = Blaze.render(Template.loginButtons,
    ReactDom.findDOMNode(this.refs.container));
  }

  componentWillMount() {

    if (typeof(this.view) == "undefined") {
    } else {
      Blaze.remove(this.view);
    }
  }

  render() {
    return <span ref="container" />;
  }
}
