import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ViewPostDetails from './container/ViewPostDetail';
import ViewPosts from './container/ViewPosts';

function App() {
  return (
    <div className='App container'>
      <Router>
        <Switch>
          <Route path='/all' exact component={ViewPosts} />
          <Route path='/posts/:id' exact component={ViewPostDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
