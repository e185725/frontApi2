import React from 'react';
import Home from './components/Home';
import Post from './components/Post';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {RegisterForm2} from './components/RegisterForm2';

function App() {
  return (
    <Router>
      {console.log(process.env)}
      <div className="App">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/post/:postId/" component={Post} />
        <Route path="/new" render={() => (<RegisterForm2 />)} />
      </div>
    </Router>
  );
}

export default App;