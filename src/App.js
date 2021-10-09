import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Email from './components/MiddlePart/Email/Email';
import EmailList from './components/MiddlePart/EmailList/EmailList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar />
          <Switch>
            <Route exact path="/" component={EmailList}></Route>
            <Route exact path="/email" component={Email}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
