import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

import x from './x.jpg';
import y from './239.jpg';
import t from './t.jpg';
const items = [
  {
src: t ,
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
src: y ,
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
src: x ,
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;



    
