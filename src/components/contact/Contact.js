import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

export default class Contact extends Component {
  render() {
    return (
      <DocumentTitle title="Budget Tracker | Contact"> 
        <div>
          <h1>Contact form</h1>
          <p>Make it accessible, or <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y" target="_blank" rel="noopener noreferrer">eslint-plugin-jsx-a11y</a> will warn you!</p>
          <form>
            <fieldset>
              <legend>Your details</legend>
              <label htmlFor="userName">Name:
              <input id="userName" type="text" name="name"/> </label>
            </fieldset>
          </form>
        </div>
      </DocumentTitle>
    );
  }
}