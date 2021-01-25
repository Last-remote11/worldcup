import './App.css';
import React, { useState, useEffect } from 'react';
import CardList from './CardList'
import NavigateBar from './NavigateBar'
import {Candidates} from './Candidates'

const App = () => {

  const [round, setRound] = useState(1)
  const [smallRound, setSmallRound] = useState(0)
  const [numberOfCandidates, setNumberOfCandodates] = useState(16)
  const [match, setMatch] = useState([])
  const [background, setBackground] = useState('body { background-color: black; }') // 다크, 라이트모드

  const [candidates, setCandidates] = useState(suffle(Candidates)) // 후보(무작위섞음)
  const [currentCandidates, setCurrentCandidates] = useState([Candidates[0], Candidates[1]]) // 매칭

  const [wins, setWins] = useState([]) // 이긴넘들

  // 랜덤 순서 생성
  // 나중에 함수를 onClickStart로 바꿀것임
  // componentDidMount() { 
  //   let list = []
  //   let tempQueue = []
  //   this.setState({number: Candidates.length})
  //   for (var i = 0; i < this.state.number; i++) {
  //     list.push(i)
  //   }
  //   for (var i = 0; i < this.state.number; i++) {
  //     let randomIndex = Math.floor(Math.random()*this.state.queue.length);
  //     tempQueue.push(randomIndex)
  //   }
  //   this.setState({queue: tempQueue})
  // }

  // useEffect(
  //   setCandidates(shuffle(Candidates)), []) // 시작할때 한번

  useEffect(() => setRound(
      {
        round: 1,
        nOfRound: getBaseLog(2, numberOfCandidates),
        smallRound: 1,
        nOfSmallRound: numberOfCandidates / 2
      }
    ), [])
  
  useEffect(() => setMatch(
    Candidates[(round.smallRound-1)*2], Candidates[(round.smallRound)*2]
    ), round)

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

  const onPick = () => {
    setCurrentCandidates()
  }


  return (
    <div className="App">
      <NavigateBar wordCupName='worldcupName'/>
      <CardList Candidates={currentCandidates}/>
    </div>
  );
}

export default App;
