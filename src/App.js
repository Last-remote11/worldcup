import './App.css';
import React, { useState, useEffect } from 'react';
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
  const [numberOfCandidates, setNumberOfCandidates] = useState(Candidates.length)
  const [worldCupName, setWorldCupName] = useState('월드컵')
  // const [background, setBackground] = useState('body { background-color: black; }') // 다크, 라이트모드
  const [candidates, setCandidates] = useState(Candidates) // 후보(무작위섞음)
  const [isEnd, setIsEnd] = useState(false);
  const [winner, setWinner] = useState('')

  const [route, setRoute] = useState('home')


  let currentCandidates = [candidates[(round-1)*2], candidates[(round-1)*2+1]]
  let tempArray = []

  useEffect(() => {
    currentCandidates = [candidates[(round-1)*2], candidates[(round-1)*2+1]]
  }, [round, candidates])
  
  useEffect(() => {
    console.log(tempArray)
  })

  const routeChange = (route) => {
    setRoute(route)
  }



  const worldCupSelect = (worldCupName) => {

    setWorldCupName(worldCupName)
    console.log('worldCupSelect',candidates)
    routeChange('game') // 비동기 주의
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
      <NavigateBar wordCupName={worldCupName}/>
      
      {
        route === 'home'
        ? <Home WorldCups = {WorldCups} onPick={worldCupSelect}/>
        :              
          isEnd 
          ? <Winner winner={winner}/>
          : <CardList currentCandidates={currentCandidates} onPick={onPickItem}/>        
      }

    </div>
  );
}

export default App;