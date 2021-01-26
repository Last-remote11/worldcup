import './App.css';
import React, { useState, useEffect } from 'react';
import CardList from './CardList'
import NavigateBar from './NavigateBar'
import {Candidates} from './Candidates'


const getBaseLog = (x, y) => {
  return Math.log(y) / Math.log(x);
}


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
  const [numberOfCandidates, setNumberOfCandidates] = useState(16)
  const [match, setMatch] = useState([])
  const [background, setBackground] = useState('body { background-color: black; }') // 다크, 라이트모드
  const [candidates, setCandidates] = useState(shuffle(Candidates)) // 후보(무작위섞음)
  const [currentCandidates, setCurrentCandidates] = useState([Candidates[0], Candidates[1]]) // 매칭

  const [wins, setWins] = useState([]) // 이긴넘들

  

  const onPick = (id) => {
    console.log(id)
    Candidates.forEach((element, i) => {
      if (element.id === id) {
        setWins(oldArray => [...oldArray, Candidates[i]])
      }
    })
    // 동기 처리가 안돼서 오류가 일어나는것같음
    console.log(wins)
    if (round === numberOfCandidates / 2) { // 마지막라운드
      setCandidates(wins)
      setWins([])
      setRound(1)
      setNumberOfCandidates(numberOfCandidates/2)
    } else {
      setRound(round + 1)
      setCurrentCandidates(
        [Candidates[(round-1)*2], Candidates[(round-1)*2+1]]
        )
    }
    
  }


  return (
    <div className="App">
      <NavigateBar wordCupName='worldcupName'/>
      <CardList currentCandidates={currentCandidates} onPick={onPick}/>
    </div>
  );
}

export default App;
