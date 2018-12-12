import React, { Component } from 'react';
import './App.css';

import PostsList from './components/forum/PostsList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <PostsList />
      </div>
    );
  }
}

export default App;
