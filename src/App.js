import './App.css';
import React, { useState, useEffect } from 'react';
import CardList from './CardList'
import NavigateBar from './NavigateBar'
import {Candidates} from './Candidates'




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
  const [numberOfCandidates, setNumberOfCandidates] = useState(4)
  const [background, setBackground] = useState('body { background-color: black; }') // 다크, 라이트모드
  const [candidates, setCandidates] = useState(shuffle(Candidates)) // 후보(무작위섞음)

  const [wins, setWins] = useState([]) // 이긴넘들


  let isEnd = false

  let currentCandidates = [candidates[(round-1)*2], candidates[(round-1)*2+1]]


  useEffect(() => {
    console.log(round)
    if (numberOfCandidates === 2) {
      console.log(`우승 : ${{wins}}`)
      isEnd = true
    } else if (round === (numberOfCandidates / 2) + 1) { // 마지막라운드이면
      setCandidates(wins)
      console.log('막라setwins', wins)
      setWins([])
      console.log('막라setwins2', wins)
      setNumberOfCandidates(numberOfCandidates/2)
    } else {
      console.log(currentCandidates)
      console.log(wins)
    }
  }, [round, wins])

  // useEffect(() => {
  //   console.log('wins바뀜')
  //   if (wins === []) {
  //     return
  //   } else {
  //     if (round === numberOfCandidates / 2) {
  //       if (numberOfCandidates === 2) {
  //         console.log(`우승자는 ${wins} 입니다`)
  //         isEnd = true
  //       } else {
  //          setRound(1)
  //         }
  //     } else {
  //       setRound(round + 1)
  //     }
  //   }
  // }, [wins])

  // useEffect(() => {
  //   console.log('round 바뀜')
  //   if (round === 1) {
  //     setCandidates(wins)
  //     setWins([])
  //     setNumberOfCandidates(numberOfCandidates/2)
  //   } else {
  //     setCurrentCandidates(
  //       [candidates[(round-1)*2], candidates[(round-1)*2+1]]
  //       )
  //   }
  // }, [round])

    

  const onPick = (id) => {
    console.log('pick id', id)
    candidates.forEach((element, i) => { // 승자 추가
      if (element.id === id) {
        setWins(oldArray => [...oldArray, element])
        console.log(wins)
      }
    })
    if (round === numberOfCandidates / 2) {
      setRound(1)
      console.log('round : ',round)
    } else {
      setRound(round + 1)
    }
    console.log('wins : ', wins)
  }


  return (
    <div className="App">
      <NavigateBar wordCupName='worldcupName'/>
      <CardList currentCandidates={currentCandidates} onPick={onPick}/>
    </div>
  );
}

export default App;
