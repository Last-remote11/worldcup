import React from 'react';


const NavigateBar = ( {worldCupName, isEnd, round, routeChange} ) => {
    return (
        <div>
            <h1>{worldCupName}</h1><button className='b f4 link dim ba bw1 ph3 pv2 mb2 dib light-blue br3' onClick={() => routeChange('home')}>홈으로</button>
            {
                isEnd
                ? <h1>우승자</h1>
                : <h2>{round}라운드</h2>
            }
        </div>
    )
}
// route를 props로 받을까?

export default NavigateBar