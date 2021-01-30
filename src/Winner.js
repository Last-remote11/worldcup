import React from 'react';

const Winner = ( {winner} ) => {
    const { img, name } = winner
    return (  
        <div className='tc bg-white dib br3 pd3 ma2 grow bw2 shadow-5'>
            <img src='https://4.bp.blogspot.com/-womv7NA3W-M/UPyIwPrV2pI/AAAAAAAAKww/gzSI1ikUuM4/s400/king_oukan.png' 
                width='50px' height='50px' alt='crown'/><br/>
            <img src={img} width='400px' height='400px' alt='img' className='br3'/>
            <div>
                <h2>{name}</h2>
            </div>
        </div>

    );
};

export default Winner;