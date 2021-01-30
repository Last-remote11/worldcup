import React from 'react';

const Card = ( {id, img, name, onPick, width='400px', height='400px'} ) => {
    return (
    <div className='tc bg-white dib br3 pd3 ma2 grow bw2 shadow-5'>
        <img src={img} width={width} height={height} alt='image' className='br3'/>
        <div>
            <h2>{name}</h2>
            <button className='b f4 link dim ba bw1 ph3 pv2 mb2 dib light-blue br3' onClick={() => onPick(id)}>PICK!</button>
        </div>
     </div>
    );
};

export default Card;