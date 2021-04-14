import React from 'react'



function Card() {
    return (
        <div className='card text-center bg-dark'>
            <img src="" alt="imagen1" />
            <div className='card-body text-light'>
                <h4 className='card-tittle'>My Tittle</h4>
                <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem voluptatum sapiente tenetur recusandae aperiam quasi officia iste esse porro, illum aspernatur, quod et consequatur. Id beatae repellendus ullam ipsum culpa?</p>
                <a href="#!" className="btn btn-outline-secondary rounded-0">
                    Go to this website
                </a>
            </div>
        </div>
    )
}

export default Card