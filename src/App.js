import './App.css';
import React, { useState, useEffect } from 'react';
import {Helmet} from 'react-helmet';
import Home from './Home';
import CardList from './CardList'
import Winner from './Winner'
import NavigateBar from './NavigateBar'
import {Candidates} from './Candidates'
import {WorldCups} from './WorldCups'





const shuffle = (array) => {
var currentIndex = array.length, temporaryValue, randomIndex;

while (0 !== currentIndex) {

  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;
  temporaryValue = array[currentIndex];
  array[currentIndex] = array[randomIndex];
  array[randomIndex] = temporaryValue;
}
return array;
}




const App = () => {

  const [round, setRound] = useState(1)
  const [numberOfCandidates, setNumberOfCandidates] = useState(8)
  const [worldCupName, setWorldCupName] = useState('이상형월드컵')
  // const [background, setBackground] = useState('body { background-color: black; }') // 다크, 라이트모드
  const [candidates, setCandidates] = useState([]) // 후보(무작위섞음)
  const [isEnd, setIsEnd] = useState(false);
  const [winner, setWinner] = useState('')

  const [route, setRoute] = useState('home')

  const [currentCandidates, setCurrentCandidates] = useState([candidates[(round-1)*2], candidates[(round-1)*2+1]])

  const [world, setWorld] = useState([])
  // let currentCandidates = [candidates[(round-1)*2], candidates[(round-1)*2+1]]

  const initialRequest = 
    {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
      worldCupName: worldCupName
    })
  }


  // 전체 월드컵을 로드
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await fetch('http://localhost:3001/load', initialRequest);
    const data = await res.json();
    setWorld(data);
    console.log(data);
  };

  useEffect(() => {
    setCurrentCandidates([candidates[(round-1)*2], candidates[(round-1)*2+1]])
    console.log('cand',candidates)
  }, [candidates])

  // useEffect(() => {
  //   let testArray = []
  //   Candidates.forEach(element => {
  //     if (element.worldCupName === worldCupName) {
  //       testArray.push(element)
  //     }
  //   })
    
  //   console.log(Candidates,'테스트어레이', testArray)

  // }, [worldCupName])


  const routeChange = (route) => {
    if (route==='home') {
      setRound(1)
      setWinner('')
      setIsEnd(false)
      setCandidates(Candidates)
      setWorldCupName('이상형월드컵')
    }
    setRoute(route)
  }
  

  const currentCount = () => {
    let gang = numberOfCandidates
    let denom = 0
    let numer = round
    while (numer > gang / 2) {
      numer = numer - gang / 2
      gang = gang / 2
    }
    denom = gang / 2
    if (gang === 2) {
      return '결승'
    } else {
      return (
        gang + '강 ' + numer + '/' + denom
      )
    }
  }
  // 8강 3/4 이런 식

  useEffect(() => {
    loadCandidates();
    console.log('useeffect', worldCupName)
  //   fetch('http://localhost:3001/worldcups', {
  //     method: 'put',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({
  //     worldCupName: worldCupName
  //   })
  // })
  // .then(res => res.json())
  // .then(res => {
  //   if (res) {
  //   fetch('http://localhost:3001/candidates', {
  //     method: 'put',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({
  //     worldCupName: worldCupName
  //   })
  // })
  // .then(res => res.json())
  // .then(data => setCandidates(data))
  //   .then(console.log('hi'))
  //   }
  // })
  // .then(worldcup => {
  //   setNumberOfCandidates(worldcup.noc)
  // })
  }
  , [worldCupName])

  

  const loadCandidates = async () => {
    const res = await fetch('http://localhost:3001/worldcups', initialRequest);
    const data = await res.json();
    setNumberOfCandidates(data.noc);
    if (data) {
      fetch('http://localsshost:3001/candidates', initialRequest)
    .then(res => res.json())
    .then(data => setCandidates(data))
    }
    routeChange('game')
    console.log('완!')
  }

  const worldCupSelect = (worldCupName) => {
    // db에 접속해서 worldcups 테이블에서 worldCupName과 일치하는 로우의 noc, 썸네일을 받고 setState하고
    // candidates 테이블에서 worldCupName과 일치하는 후보들의 name, image를 가져와 candidate에 setState
    setWorldCupName(worldCupName)
    loadCandidates();
    console.log('worldCupSelect',candidates) // 비동기 주의
    console.log(winner)
    console.log(worldCupName)
  }


// [1,2,3,4,5,6,7,8,/1,3,5,7/1,5/1]
  const onPickItem = (id) => {

    Candidates.forEach((element) => { // 승자 추가
      if (element.id === id) {
        setCandidates(oldArray => [...oldArray, element])
        setWinner(element)
      }
    })

    if (round === numberOfCandidates - 1) {
      setIsEnd(true)
      console.log(winner, isEnd)
    } else {
      setRound(round + 1)
    }
  }


  return (
    <div className="App">
      <Helmet>
        <meta charSet='utf-8'/>
        
      </Helmet>
      <NavigateBar worldCupName={worldCupName} isEnd={isEnd} routeChange={routeChange}
      currentCount={currentCount} route={route}/>
      
      {
        route === 'home'
        ? <Home WorldCups = {world} worldCupSelect={worldCupSelect}/>
        :              
          isEnd 
          ? <Winner winner={winner}/>
          : <CardList currentCandidates={currentCandidates} onPickItem={onPickItem}/>        
      }

    </div>
  );
}

export default App;