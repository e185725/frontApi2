import React from 'react';
import Home from './components/Home';
import Post from './components/Post';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerForm from './components/registerForm';

function App() {
  return (
    <Router>
      {console.log(process.env)}
      <div className="App">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/post/:postId/" component={Post} />
        <Route path="/new" component={registerForm} />
      </div>
    </Router>
  );
}

export default App;