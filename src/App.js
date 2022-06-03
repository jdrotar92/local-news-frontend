import React from 'react';
import './App.css';
import MessageBox from './component/messagebox.js'

export default class App extends React.Component {
  render() {
    return (
      <div className="home-page">
        <MessageBox />
      </div>
    );
  }
}
