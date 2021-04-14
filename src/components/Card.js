import React from 'react'

import image1 from '../assets/image1.jpg'

function Card() {
    return (
        <div className='card'>
            <img src={image1} alt="imagen1" srcset=""/>
            <div className='card-body'>
                <h4 className='card-tittle'>My Tittle</h4>
                <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem voluptatum sapiente tenetur recusandae aperiam quasi officia iste esse porro, illum aspernatur, quod et consequatur. Id beatae repellendus ullam ipsum culpa?</p>
            </div>
        </div>
    )
}

export default Card