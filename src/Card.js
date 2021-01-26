import React from 'react';

const Card = ( {id, img, name, onPick} ) => {
    return (
    <div className='tc bg-white dib br3 pd3 ma2 grow bw2 shadow-5'>
        <img src={img} width='200px' height='200px' alt='img' className='br3'/>
        <div>
            <h2>{name}</h2>
            <button onClick={() => onPick(id)}>pick!</button>
        </div>
     </div>
    );
};

export default Card;