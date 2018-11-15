import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form/Form'
import Dashboard from './components/dashboard/Dashboard'
import Nav from './components/nav/Nav'
import Post from './components/post/Post'
import Auth from './components/auth/Auth'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Auth />
        <Dashboard />
        <Form />
        <Post />
      </div>
    );
  }
}

export default App;
