import React from 'react';

const Card = ( {img, name} ) => {
    return (
    <div className='tc bg-white dib br3 pd3 ma2 grow bw2 shadow-5'>
        <img src={img} width='200px' height='200px' alt='image' className='br3'/>
        <div>
            <h2>{name}</h2>
            <button>pick!</button>
        </div>
     </div>
    );
};

export default Card;