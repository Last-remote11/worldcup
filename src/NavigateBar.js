import React from 'react';
import Home from './Home';


const NavigateBar = ( {worldcupName, isEnd, routeChange, currentCount, route} ) => {
    return (
        <div>
            <h1>{worldcupName}</h1><button className='b f4 link dim ba bw1 ph3 pv2 mb2 dib light-blue br3' onClick={() => routeChange('home')}>홈으로</button>
            {route==='home'
            ? <h1>월드컵을 선택하세요</h1>
            :
                isEnd
                ? <h1>우승자</h1>
                : <h2>{currentCount()}</h2>
             
            }
        </div>
    )
}
// route를 props로 받을까?

export default NavigateBar