import React from 'react';
import './Card.css'




const Card = ( {id, img, name, onPick, width='400px', height='400px'} ) => {
    return (
    <div className='tc bg-white dib br3 pd3 ma2 grow bw2 shadow-5'>
        <img src={img} width={width} height={height} alt='loading failed' className='br3 pointer' onClick={() => onPick(id)}/>
        <div>
            <h2>{name}</h2>
        </div>
     </div>
    );
};  

export default Card;