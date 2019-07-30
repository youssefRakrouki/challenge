import React from 'react';
import './App.css';
import Na from'./component/navbar';
import Carousel from './component/carousel';
import Service from './component/service';
import Card from './component/Card';
import Card1 from './component/card1';
import { Col, Row, Container} from 'react-bootstrap';
import { BrowserRouter , Route } from 'react-router-dom';
import Compo from './component/Compo';

import Place from './component/Place';

export default class App extends React.Component  {
  render (){


  
  return (
    <div className="App">
    <Na/>
    <Carousel />  
<Service/>
<Container>
<Row>

<Col md={4}>
<Card/>
</Col>
<Col md={4}>
<Card1/>
</Col>
</Row>
</Container>

    </div>
  );
}
}

