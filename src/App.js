import './App.css';
import React, { useState, useEffect } from 'react';
import {Helmet} from 'react-helmet';
import Home from './Home';
import CardList from './CardList'
import Winner from './Winner'
import NavigateBar from './NavigateBar'
import AddWorldcup from './AddWorldcup'

import SignIn from './SignIn';


import Rank from './Rank'




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
  const [numberOfCandidates, setNumberOfCandidates] = useState(0)
  const [worldcupName, setWorldcupName] = useState('이상형월드컵')
  // const [background, setBackground] = useState('body { background-color: black; }') // 다크, 라이트모드
  const [candidates, setCandidates] = useState([]) // 후보(무작위섞음)
  const [isEnd, setIsEnd] = useState(false);
  const [winner, setWinner] = useState('')
<<<<<<< HEAD
  const [route, setRoute] = useState('home')
=======
  const [route, setRoute] = useState('signIn')
>>>>>>> bcda1f1cc7049c867148713973960adc9022b81d
  const [currentCandidates, setCurrentCandidates] = useState([candidates[(round-1)*2], candidates[(round-1)*2+1]])
  const [world, setWorld] = useState([])
  // let currentCandidates = [candidates[(round-1)*2], candidates[(round-1)*2+1]]

  const initialRequest = 
    {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
      worldcupName: worldcupName
    })
  }


  // 전체 월드컵을 로드
  useEffect(() => {
    
    const loadData = async () => {
      const res = await fetch('https://young-mesa-11204.herokuapp.com/load', initialRequest);
      const data = await res.json();
      setWorld(data);
      console.log(data);
    };
    loadData()
  }, [route]);



  useEffect(() => {
    setCurrentCandidates([candidates[(round-1)*2], candidates[(round-1)*2+1]])
    console.log('cand',candidates)
  }, [candidates])


  useEffect(() => {

    const addWinner = async () => {
      const res = await fetch('https://young-mesa-11204.herokuapp.com/addWinner',     
      {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
        winner: winner.name,
        worldcupname: winner.worldcupName
      })
    });
      const data = await res.json();
      console.log(data)
    }

    if (isEnd) {
      addWinner();
    }
  }, [isEnd])
  

  const routeChange = (route) => {
    if (route==='home') {
      setRound(1)
      setWinner('')
      setCandidates([])
      setIsEnd(false)
      setWorldcupName('이상형월드컵')
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
  // 8강 3/4 이런 식으로 현재 단계를 표현

  useEffect(() => {

    // candidates 테이블에서 worldcupName과 일치하는 후보들의 name, image 등을 가져와 candidate에 setState
    // useEffect로 한 이유 : currentcandidate가 [] 인 채로 home으로 넘어가 버려 에러가 일어남
    if (worldcupName !== '이상형월드컵') {
      fetch('https://young-mesa-11204.herokuapp.com/candidates', initialRequest)
      .then(res => res.json())
      .then(data => {
        setCandidates(shuffle(data))
        setNumberOfCandidates(data.length)})
      .then(console.log('candidate 읽었음', candidates))
      .catch(err => console.log(err, 'candidate 불러오는중 에러'))
    }
  }
  , [worldcupName])

  useEffect(() => {
    if (candidates.length !== 0 && route !== 'signIn')
    {routeChange('game')}
  }, [candidates])


  const worldcupSelect = (worldcupName) => {

    setWorldcupName(worldcupName);
    console.log('worldcupSelect', candidates);
    console.log(winner);
  };


// [1,2,3,4,5,6,7,8,/1,3,5,7/1,5/1]
  const onPickItem = (id) => {

    candidates.forEach((element) => { // 승자 추가
      if (element.id === id) {
        setCandidates(oldArray => [...oldArray, {
          id: element.id * 1000,
          worldcupName: worldcupName,
          name: element.name,
          img: element.img
        }])
        setWinner(element)
      }
    })

    if (round === numberOfCandidates - 1) {
      setIsEnd(true)
    } else {
      setRound(round + 1)
    }
  }


  return (
    <div className="App">
      <Helmet>
        <meta charSet='utf-8'/>
      </Helmet>
      { route === 'signIn'
        ? <h2></h2>
        : <NavigateBar worldcupName={worldcupName} isEnd={isEnd} routeChange={routeChange}
          currentCount={currentCount} route={route}/>
        }
      
      { // switch로 변경?
        route === 'signIn'
        ? <SignIn routeChange={routeChange} />
        :
          route === 'addWorldcup'
          ? <AddWorldcup world={world} routeChange={routeChange}/>
          :
            route === 'home'
            ? <Home WorldCups = {world} worldcupSelect={worldcupSelect}/> 
            :              
              isEnd === true
              ? <Winner winner={winner}/>
              : <CardList currentCandidates={currentCandidates} onPickItem={onPickItem}/>        
      }
<<<<<<< HEAD
      <Rank />
=======
>>>>>>> bcda1f1cc7049c867148713973960adc9022b81d
    </div>
  );
}

export default App;