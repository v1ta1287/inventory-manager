import React from 'react';
import TablePage from './Pages/TablePage';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Components/Navigation';
import AddItem from './Components/AddItem';



function App() {


  return (
    <Router>    
      <Navigation/>
        <Switch>
          <Route exact path="/">
            <TablePage/>
          </Route>
          <Route exact path="/test">
            <AddItem/>
          </Route>
        </Switch>
    </Router>
    
  );
}

export default App;
