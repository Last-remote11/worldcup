import React, { useState, useEffect } from 'react';


const Rank = ( { winner } ) => {
   
    const [rank, setRank] = useState([])

    useEffect(() => {
        fetch('https://young-mesa-11204.herokuapp.com/rank',
        {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            worldcupName: winner.worldcupName
          })
        }
      )
        .then(res => res.json())
        .then(data => {
          setRank(data)
        })
        .catch(err => console.log(err, 'rank 불러오는중 에러'))
    }, [])
    
    return (
        <div>
            {
            rank.length === 0
            ?<h1>Rank Loading . . .</h1>
            :
            rank.map(element => {
                return(
                    <div key={element.name} className='tc bg-skyblue dib br3 pd3 ma2 bw2 shadow-5 w-50'>
                        <img src={element.img} height='100px' max-width='200px' alt='image load failed' />
                        <h2>
                        {element.name}
                        {element.wincount}
                        </h2>
                    </div>
                    )
                })
            }
        </div>
    );
};

export default Rank;
