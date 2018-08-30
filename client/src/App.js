import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavBar from './components/AppNavBar.js';
import ShoppingList from './components/ShoppingList.js';
import ItemModal from './components/ItemModal.js';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavBar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </div>
    );
  }
}

export default App;
