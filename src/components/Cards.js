import React from "react";
import Card from "./Card";

import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'


const cards = [
  {
    id:1,
    title:'Faz Web',
    image:image1
  },
  {
    id:2,
    title:'Fazt Blog',
    image:image2
  },
  {
    id:3,
    title:'Fazt Youtube',
    image:image3
  }
]

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {
          cards.map(card => (
            <div className="col-md-4" key={card.id}>
              <Card />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Cards;
