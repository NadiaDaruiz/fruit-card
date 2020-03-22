import React from 'react';
import FruitCard from './components/FruitCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { CardDeck, Card } from 'reactstrap';

import Apples from './img/apples.jpeg';
import Bananas from './img/bananas.jpg';
import Plums from './img/plums.jpg';
import Blueberries from './img/blueberries.jpg';
import Strawberries from './img/strawberries.jpg';

function App() {
  return (
    <div>
      <h1>Fruit Selection</h1>
      <CardDeck className='box'>
        <Card outline color='danger' className='inbox'>
          <FruitCard name={'Strawberries'} price={1.99} picture={Strawberries} />
        </Card>
        <Card outline color='danger' className='inbox'>
          <FruitCard name={'Bananas'} price={1.50} picture={Bananas} />
        </Card>
        <Card outline color='danger' >
          <FruitCard name={'Apples'} price={2.99} picture={Apples} />
        </Card>
        <Card outline color='danger' >
          <FruitCard name={'Plums'} price={0.99} picture={Plums} />
        </Card>
        <Card outline color='danger' >
          <FruitCard name={'Blueberries'} price={2.99} picture={Blueberries} />
        </Card>
      </CardDeck>
    </div>
  );
}

export default App;
