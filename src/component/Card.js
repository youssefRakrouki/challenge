import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button  } from 'reactstrap';
import x from './cap.jpg';
const Example = (props) => {
  return (
    <div>
      <Card>
        <CardImg   src={x}  />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
     
      </Card>
      
    </div>
  );
};

export default Example;