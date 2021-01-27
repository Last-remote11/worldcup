import React from 'react';

const Winner = ( {winner} ) => {
    const { img, name } = winner
    return (
    <div className='tc bg-white dib br3 pd3 ma2 grow bw2 shadow-5'>
        <img src={img} width='200px' height='200px' alt='img' className='br3'/>
        <div>
            <h2>{name}</h2>
            <img 
            src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F415879346831580795%2F&psig=AOvVaw2QGEdKFATvfNh2WIqbgFvD&ust=1611824500402000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDM16ngu-4CFQAAAAAdAAAAABAD'
            width='20px' height='20px' alt='img' className='br3'></img>
        </div>
     </div>
    );
};

export default Winner;