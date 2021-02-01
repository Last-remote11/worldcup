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
  const [numberOfCandidates, setNumberOfCandidates] = useState(Candidates.length)
  const [worldCupName, setWorldCupName] = useState('월드컵')
  // const [background, setBackground] = useState('body { background-color: black; }') // 다크, 라이트모드
  const [candidates, setCandidates] = useState(Candidates) // 후보(무작위섞음)
  const [isEnd, setIsEnd] = useState(false);
  const [winner, setWinner] = useState('')

  const [route, setRoute] = useState('home')

  const [currentCandidates, setCurrentCandidates] = useState([candidates[(round-1)*2], candidates[(round-1)*2+1]])

  // let currentCandidates = [candidates[(round-1)*2], candidates[(round-1)*2+1]]

  useEffect(() => {
    setCurrentCandidates([candidates[(round-1)*2], candidates[(round-1)*2+1]])
    console.log('cand',candidates)
  }, [candidates])

  useEffect(() => {
    let testArray = []
    Candidates.forEach(element => {
      if (element.worldCupName === worldCupName) {
        testArray.push(element)
      }
    })
    
    console.log(Candidates,'테스트어레이', testArray)

  }, [worldCupName])


  const routeChange = (route) => {
    if (route==='home') {
      setRound(1)
      setWinner('')
      setIsEnd(false)
      setCandidates(Candidates)
      setWorldCupName('월드컵')
    }
    setRoute(route)
  }
  



  const worldCupSelect = (worldCupName) => {

    setWorldCupName(worldCupName)
    console.log('worldCupSelect',candidates)
    routeChange('game') // 비동기 주의
    console.log(winner)
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
      <NavigateBar worldCupName={worldCupName} isEnd={isEnd} round={round} routeChange={routeChange}/>
      
      {
        route === 'home'
        ? <Home WorldCups = {WorldCups} worldCupSelect={worldCupSelect}/>
        :              
          isEnd 
          ? <Winner winner={winner}/>
          : <CardList currentCandidates={currentCandidates} onPickItem={onPickItem}/>        
      }

    </div>
  );
}

export default App;