import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

export default class About extends Component {
  render() {
    return (
      <DocumentTitle title="Budget Tracker | About"> 
        <div>About page</div>
      </DocumentTitle>
    );
  }
}