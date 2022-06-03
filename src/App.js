import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MessageBox from './component/messagebox.js'

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

export default class App extends React.Component {
  render() {
    return (
      <div className="home-page">
        <MessageBox />
      </div>
    );
  }
}
