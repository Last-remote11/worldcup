import './App.css';
import React, { useState, useEffect } from 'react';
import CardList from './CardList'
import Winner from './Winner'
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
  const [numberOfCandidates, setNumberOfCandidates] = useState(Candidates.length)
  // const [background, setBackground] = useState('body { background-color: black; }') // 다크, 라이트모드
  const [candidates, setCandidates] = useState(shuffle(Candidates)) // 후보(무작위섞음)


  let isEnd = false
  let winner = ''

  let currentCandidates = [candidates[(round-1)*2], candidates[(round-1)*2+1]]
  // 1라=[0,1], 2라=[2,3], 3라=[4,5]...

  useEffect(() => {
    currentCandidates = [candidates[(round-1)*2], candidates[(round-1)*2+1]]
  }, [candidates])


// [1,2,3,4,5,6,7,8,/1,3,5,7/1,5/1]
  const onPick = (id) => {
    console.log('pick id', id)
    Candidates.forEach((element) => { // 승자 추가

      if (element.id === id) {
        setCandidates(oldArray => [...oldArray, element])
      }
    })
    console.log(round, numberOfCandidates)
    if (round === numberOfCandidates - 1) {
      winner = candidates[numberOfCandidates-1]
      isEnd = true
      console.log(winner, isEnd)
    } else {
      setRound(round + 1)
    }
  }


  return (
    <div className="App">
      <NavigateBar wordCupName='worldcupName'/>
      { isEnd === true
      ? <Winner winner={winner} onPick={onPick}/>
      : <CardList currentCandidates={currentCandidates} onPick={onPick}/>
      }

    </div>
  );
}

export default App;