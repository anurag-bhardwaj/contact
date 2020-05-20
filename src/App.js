import React from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';
import AddContact from './components/AddContact';
import editContact from './components/editContact';
import './App.css';
import { Provider }  from './Context.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Provider>
      <Router>
      <div className="App">
        <Header branding="Contact Manger"/>
        <div className="container">
          <Switch>
            <Route exact path="/contact/add" component={AddContact} />
            <Route exact path="/" component={Contacts} />
            <Route exact path ="/contact/edit/:id" component={editContact}/>
          </Switch>
          </div>
      </div>
      </Router>
      </Provider>
  );
}

export default App;

