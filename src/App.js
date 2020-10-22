import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import ViewPostDetails from './container/ViewPostDetail';
import ViewPosts from './container/ViewPosts';

function NotFound() {
  return (
    <>
      <h1>Page not found</h1>
      <Link to='/all'>
        <h4>click here</h4>
      </Link>
    </>
  );
}

function App() {
  return (
    <div className='App container'>
      <Router>
        <Switch>
          <Route path='/all' exact component={ViewPosts} />
          <Route path='/posts/:id' exact component={ViewPostDetails} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
