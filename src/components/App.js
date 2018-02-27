import React, { Component } from 'react';
import './App.css';
import logo from './React-icon.svg';

export default class App extends Component {
  render() {
    return (
      <div className="grid-wrap">
        <header id="main-header" role="banner">
          <a href="#main-content" className="clip">Skip to main content</a>
          <img src={logo} alt="without an alt description, our linter throws an error!" id="logo" />
        </header>
        <main id="main-content" role="main">

        </main>
        <footer id="main-footer">
          <small>&copy; 2018 this app.</small>
        </footer>
      </div>
    );
  }
}